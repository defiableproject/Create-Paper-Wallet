import { walletAdvancedStore } from '@/state/walletAdvanced';

import { storePatcher, storeValue } from '@/utils/zustand';

export function checkPath() {
    const patch = storePatcher(walletAdvancedStore);
    const { derivation } = storeValue(walletAdvancedStore);

    const { path } = derivation;

    const regex = /^m\/(\d+'?)((\/\d+'?)?){0,3}$/g;
    const pathOk = !!String(path ?? '').match(regex);

    patch(_ => _.derivation.pathOk, pathOk);
}
