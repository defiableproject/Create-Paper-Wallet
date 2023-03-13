import type { IncomingMessage } from '@/types/workers/vanity';

import { vanityStore } from '@/state/vanity';
import { clearStatistics } from '@/state/vanity/statistics';
import { manageWorkers } from '@/state/vanity/workers';

import { storePatcher, storeValue } from '@/utils/zustand';

export function startVanity() {
    const patch = storePatcher(vanityStore);
    const { config } = storeValue(vanityStore);

    patch(_ => _.result, null);
    patch(_ => _.status, { running: true, status: 'vanity.status.running', error: '' });

    clearStatistics();
    manageWorkers(config.threads);

    const { network, workers } = storeValue(vanityStore);

    for (const worker of workers) {
        worker.postMessage({ network, ...config } as IncomingMessage);
    }

    patch(_ => _.statistics.firstTick, performance.now());
}

export function stopVanity() {
    const patch = storePatcher(vanityStore);

    patch(_ => _.result, null);

    patch(_ => _.status.running, false);
    patch(_ => _.status.status, 'vanity.status.stopped');

    manageWorkers(0);
}
