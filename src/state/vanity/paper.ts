import { vanityStore } from '@/state/vanity';

import { storePatcher } from '@/utils/zustand';

export function togglePaper(visible?: boolean) {
    const patch = storePatcher(vanityStore);

    patch(_ => _.paper.visible, visible ?? (prev => !prev));
}
