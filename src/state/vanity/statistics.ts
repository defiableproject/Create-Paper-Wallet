import { vanityStore } from '@/state/vanity';

import { storePatcher } from '@/utils/zustand';

export function clearStatistics() {
    const patch = storePatcher(vanityStore);

    patch(_ => _.statistics, { firstTick: 0, generated: 0 });
}
