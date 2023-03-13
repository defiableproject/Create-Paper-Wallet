import VanityWorker from '@/workers/vanity?worker&inline';

import type { OutgoingMessage } from '@/types/workers/vanity';
import { vanityStore } from '@/state/vanity';

import { storePatcher, storeValue } from '@/utils/zustand';
import { messageIsAddress, messageIsAttempt, messageIsError } from '@/utils/vanity/worker';

export function manageWorkers(quantity: number) {
    terminateWorkers(quantity);
    initWorkers(quantity);
}

export function initWorkers(quantity: number) {
    if (!quantity) {
        return;
    }

    const patch = storePatcher(vanityStore);

    patch(_ => _.workers, workers => {
        for (let w = workers.length; w < quantity; w++) {
            try {
                // @ts-ignore
                workers[w] = new VanityWorker() as Worker;
                workers[w].onmessage = handleMessage;
            } catch (err) {
                console.error(err);

                break;
            }
        }

        return [ ...workers ];
    });
}

export function terminateWorkers(remaining: number) {
    const patch = storePatcher(vanityStore);

    patch(_ => _.workers, workers => {
        while (workers.length > remaining) {
            workers.pop()?.terminate();
        }

        return [ ...workers ];
    });
}

function handleMessage(ev: MessageEvent<OutgoingMessage>) {
    const { data } = ev;

    const patch = storePatcher(vanityStore);

    const isAttempt = messageIsAttempt(data);
    const isAddress = messageIsAddress(data);
    const isError = messageIsError(data);

    if (isAttempt) {
        patch(_ => _.statistics.generated, prev => prev + data.attempts);

        if (!isAddress) return;
    }

    terminateWorkers(0);
    patch(_ => _.status.running, false);

    if (isError) {
        patch(_ => _.status.error, data.error);
        patch(_ => _.status.status, 'vanity.status.error');
    }
    else if (isAddress) {
        const { statistics: { generated } } = storeValue(vanityStore);

        patch(_ => _.status.error, '');
        patch(_ => _.status.status, 'vanity.status.found');

        patch(_ => _.result, data.address);

        patch(_ => _.paper.index, generated);
    }
}
