import type { IncomingMessage } from '@/types/workers/walletAdvanced';

import { walletAdvancedStore } from '@/state/walletAdvanced';
import { manageWorkers } from '@/state/walletAdvanced/workers';

import { storePatcher, storeValue } from '@/utils/zustand';

export function startAdvanced() {
    const patch = storePatcher(walletAdvancedStore);

    patch(_ => _.result, []);
    patch(_ => _.status, { running: true, status: 'walletAdvanced.status.running', error: '' });

    manageWorkers(1);

    const { network, keys, derivation, addresses, workers } = storeValue(walletAdvancedStore);
    const { rootBase58 } = keys;
    const { path } = derivation;
    const { quantity, startingIndex, useHardened } = addresses;

    for (const worker of workers) {
        const conf: IncomingMessage = { rootBase58, network, path, quantity, startingIndex, useHardened };

        worker.postMessage(conf);
    }
}

export function stopAdvanced() {
    const patch = storePatcher(walletAdvancedStore);

    patch(_ => _.result, []);

    patch(_ => _.status.running, false);
    patch(_ => _.status.status, 'walletAdvanced.status.stopped');

    manageWorkers(0);
}
