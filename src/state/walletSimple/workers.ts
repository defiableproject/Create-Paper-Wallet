import SimpleWorker from '@/workers/walletSimple?worker&inline';

import type { OutgoingMessage } from '@/types/workers/walletSimple';
import { walletSimpleStore } from '@/state/walletSimple';

import { storePatcher } from '@/utils/zustand';
import { messageIsAddresses, messageIsError } from '@/utils/walletSimple/worker';

export function manageWorkers(quantity: number) {
    terminateWorkers(quantity);
    initWorkers(quantity);
}

export function initWorkers(quantity: number) {
    if (!quantity) {
        return;
    }

    const patch = storePatcher(walletSimpleStore);

    patch(_ => _.workers, workers => {
        for (let w = workers.length; w < quantity; w++) {
            try {
                // @ts-ignore
                workers[w] = new SimpleWorker() as Worker;
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
    const patch = storePatcher(walletSimpleStore);

    patch(_ => _.workers, workers => {
        while (workers.length > remaining) {
            workers.pop()?.terminate();
        }

        return [ ...workers ];
    });
}

function handleMessage(ev: MessageEvent<OutgoingMessage>) {
    const { data } = ev;

    const patch = storePatcher(walletSimpleStore);

    const isAddresses = messageIsAddresses(data);
    const isError = messageIsError(data);

    terminateWorkers(0);
    patch(_ => _.status.running, false);

    if (isError) {
        patch(_ => _.status.error, data.error);
        patch(_ => _.status.status, 'walletSimple.status.error');
    }
    else if (isAddresses) {
        patch(_ => _.status.error, '');
        patch(_ => _.status.status, 'walletSimple.status.found');

        patch(_ => _.result, prev => [ ...prev, ...data.addresses ]);
    }
}
