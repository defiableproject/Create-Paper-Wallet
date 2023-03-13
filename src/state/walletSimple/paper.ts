import { walletSimpleStore } from '@/state/walletSimple';

import { storePatcher } from '@/utils/zustand';

export function showPaper(index: number | null) {
    const patch = storePatcher(walletSimpleStore);

    patch(_ => _.paper, prev => {
        if (index === null || prev.index === index) {
            return { visible: false, index: null };
        }

        return { visible: true, index };
    });
}

export function resetPaper() {
    return showPaper(null);
}
