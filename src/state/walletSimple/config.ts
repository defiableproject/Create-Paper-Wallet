import { walletSimpleStore } from '@/state/walletSimple';

import { storePatcher, storeValue } from '@/utils/zustand';

export function checkQuantity() {
    const patch = storePatcher(walletSimpleStore);
    const { config } = storeValue(walletSimpleStore);

    const { quantity } = config;
    const num = Number(quantity);

    patch(_ => _.config.quantityOk, !isNaN(num) && num > 0);
}
