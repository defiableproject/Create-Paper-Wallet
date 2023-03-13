import { walletAdvancedStore } from '@/state/walletAdvanced';

import { storePatcher, storeValue } from '@/utils/zustand';

export function checkQuantity() {
    const patch = storePatcher(walletAdvancedStore);
    const { addresses } = storeValue(walletAdvancedStore);

    const { quantity } = addresses;
    const num = Number(quantity);

    patch(_ => _.addresses.quantityOk, !isNaN(num) && num > 0);
}

export function checkStartingIndex() {
    const patch = storePatcher(walletAdvancedStore);
    const { addresses } = storeValue(walletAdvancedStore);

    const { startingIndex } = addresses;
    const num = Number(startingIndex);

    patch(_ => _.addresses.startingIndexOk, !isNaN(num) && num >= 0);
}
