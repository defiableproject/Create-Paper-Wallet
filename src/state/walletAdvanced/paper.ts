import { storePatcher } from '@/utils/zustand';
import { walletAdvancedStore } from '@/state/walletAdvanced/index';

export function showPaper(index: number | null) {
    const patch = storePatcher(walletAdvancedStore);

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
