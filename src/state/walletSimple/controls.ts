import type { IncomingMessage } from '@/types/workers/walletSimple';

import { walletSimpleStore } from '@/state/walletSimple';
import { manageWorkers } from '@/state/walletSimple/workers';

import { storePatcher, storeValue } from '@/utils/zustand';

export function startSimple() {
    const patch = storePatcher(walletSimpleStore);
    const { network, config } = storeValue(walletSimpleStore);

    patch(_ => _.result, []);
    patch(_ => _.status, { running: true, status: 'walletSimple.status.running', error: '' });

    manageWorkers(1);

    const { workers } = storeValue(walletSimpleStore);

    for (const worker of workers) {
        const conf: IncomingMessage = { network, ...config };

        worker.postMessage(conf);
    }
}

export function stopSimple() {
    const patch = storePatcher(walletSimpleStore);

    patch(_ => _.result, []);

    patch(_ => _.status.running, false);
    patch(_ => _.status.status, 'walletSimple.status.stopped');

    manageWorkers(0);
}
