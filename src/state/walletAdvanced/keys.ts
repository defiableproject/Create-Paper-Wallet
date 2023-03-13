import type { HDNode } from '@/types/libs/bitcoin';

import { walletAdvancedStore } from '@/state/walletAdvanced';
import { overwriteSeed } from '@/state/walletAdvanced/bip39';

import { storePatcher, storeValue } from '@/utils/zustand';
import { calcExtendedRoot, calcKeysFromExtended } from '@/libs/bip32';

export function overwriteRoot(rootBase58: string) {
    const patch = storePatcher(walletAdvancedStore);
    const { network } = storeValue(walletAdvancedStore);

    let root: HDNode | null;

    try {
        root = libs.bitcoin.HDNode.fromBase58(rootBase58, network);
        rootBase58 = root.toBase58();
    } catch (error) {
        root = null;

        console.log(error);
    }

    overwriteSeed('');

    patch(_ => _.keys.rootBase58, rootBase58);
    patch(_ => _.keys.root, root);
}

export function autogenRoot() {
    const patch = storePatcher(walletAdvancedStore);
    const { network, bip39 } = storeValue(walletAdvancedStore);

    const { seed, seedOk } = bip39;

    if (!seed) {
        return;
    }

    let root: HDNode | null;
    let rootBase58: string;

    try {
        root = seedOk ? libs.bitcoin.HDNode.fromSeedHex(seed, network) : null;
        rootBase58 = root?.toBase58() ?? '';
    } catch (error) {
        root = null;
        rootBase58 = '';

        console.log(error);
    }

    patch(_ => _.keys.rootBase58, rootBase58);
    patch(_ => _.keys.root, root);
}

export function checkRoot() {
    const patch = storePatcher(walletAdvancedStore);
    const { keys } = storeValue(walletAdvancedStore);

    const { root, rootBase58 } = keys;

    patch(_ => _.keys.rootOk, !!rootBase58 === !!root);
}

export function autogenExtended() {
    const patch = storePatcher(walletAdvancedStore);
    const { keys, derivation } = storeValue(walletAdvancedStore);

    const { root } = keys;
    const { path, pathOk } = derivation;

    let extended: HDNode | null = null;
    let extPrivate = '';
    let extPublic = '';

    if (root && pathOk) {
        extended = calcExtendedRoot(root, path);

        if (extended) {
            [ extPrivate, extPublic ] = calcKeysFromExtended(extended);
        }
    }

    patch(_ => _.keys.extended, extended);
    patch(_ => _.keys.extPrivate, extPrivate);
    patch(_ => _.keys.extPublic, extPublic);
}
