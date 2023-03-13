import type { ECPair, HDNode } from '@/types/libs/bitcoin';

import { isCasino, isCosmos, isEosio, isEthereum, isFio, isJingtum, isRipple, isRsk, isStarname, isTerra, isThorchain, isWhitecoin } from '@/utils/networks';
import { transform_casino, transform_common, transform_cosmos, transform_eosio, transform_ethereum, transform_fio, transform_jingtum, transform_ripple, transform_rsk, transform_starname, transform_terra, transform_thorchain, transform_whitecoin } from '@/utils/address/transform';

export interface CalcAddressOptions {
    extended: HDNode,
    index: number,
    path: string,
    useHardened?: boolean,
}

export interface FullAddress {
    path: string,
    privateKey: string,
    publicKey: string,
    address: string,
}

export interface Address {
    privateKey: string,
    publicKey: string,
    address: string,
}

export function calcAddress(options: CalcAddressOptions) {
    const { extended, index, path: _path, useHardened = true } = options;

    const path = (_path + '/' + index) + (useHardened ? '\'' : '');

    const key: HDNode = useHardened ? extended.deriveHardened(index) : extended.derive(index);
    const hasPrivate = !key.isNeutered();

    const address = keypairToAddress(key.keyPair, hasPrivate);

    return { path, ...address } as FullAddress;
}

export function keypairToAddress(keyPair: ECPair, hasPrivateKey: boolean) {
    const { network } = keyPair;

    if (isEthereum(network)) {
        return transform_ethereum(keyPair, hasPrivateKey);
    } else if (isRsk(network)) {
        return transform_rsk(keyPair, hasPrivateKey);
    } else if (isRipple(network)) {
        return transform_ripple(keyPair, hasPrivateKey);
    } else if (isJingtum(network)) {
        return transform_jingtum(keyPair, hasPrivateKey);
    } else if (isCasino(network)) {
        return transform_casino(keyPair, hasPrivateKey);
    } else if (isEosio(network)) {
        return transform_eosio(keyPair, hasPrivateKey);
    } else if (isFio(network)) {
        return transform_fio(keyPair, hasPrivateKey);
    } else if (isCosmos(network)) {
        return transform_cosmos(keyPair, hasPrivateKey);
    } else if (isThorchain(network)) {
        return transform_thorchain(keyPair, hasPrivateKey);
    } else if (isWhitecoin(network)) {
        return transform_whitecoin(keyPair, hasPrivateKey);
    } else if (isTerra(network)) {
        return transform_terra(keyPair, hasPrivateKey);
    } else if (isStarname(network)) {
        return transform_starname(keyPair, hasPrivateKey);
    }

    return transform_common(keyPair, hasPrivateKey);
}
