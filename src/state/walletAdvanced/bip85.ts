import { walletAdvancedStore } from '@/state/walletAdvanced';

import { storePatcher, storeValue } from '@/utils/zustand';
import { calcBip85Child } from '@/libs/bip85';

export function checkIndex() {
    const patch = storePatcher(walletAdvancedStore);
    const { bip85 } = storeValue(walletAdvancedStore);

    const { index } = bip85;

    patch(_ => _.bip85.indexOk, index >= 0);
}

export function checkHexBytes() {
    const patch = storePatcher(walletAdvancedStore);
    const { bip85 } = storeValue(walletAdvancedStore);

    const { hex: { bytes } } = bip85;

    patch(_ => _.bip85.hex.bytesOk, bytes >= 16 && bytes <= 64);
}

export function autogenChild() {
    const patch = storePatcher(walletAdvancedStore);
    const { network, keys, bip85 } = storeValue(walletAdvancedStore);

    const { rootBase58 } = keys;
    const { application, index, bip39: { language, length }, hex: { bytes } } = bip85;

    let child: string;

    try {
        child = calcBip85Child({ application, rootBase58, network, index, language, length, bytes });
    } catch (error) {
        child = '';

        console.log(error);
    }

    patch(_ => _.keys.bip85, child);
}
