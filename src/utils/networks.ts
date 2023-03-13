import type { Network } from '@/types/libs/bitcoin';

export function isEthereum(network: Network) {
    return [
        'ethereum',
        'etherclassic',
        'energyweb',
        'pirl',
        'mix',
        'moac',
        'mix',
        'poa',
        'expanse',
        'callisto',
        'dexon',
        'ellaism',
        'ethersocial',
        'vechain',
        'ethercore',
        'binance',
    ].includes(network.alias);
}

export function isLitecoin(network: Network) {
    return [
        'litecoin',
        'litecointestnet',
    ].includes(network.alias);
}

export function isRsk(network: Network) {
    return [
        'rsk',
        'rsktestnet',
    ].includes(network.alias);
}

export function getRskChainId(network: Network) {
    const { alias } = network;

    if (alias === 'rsk') {
        return 30;
    }
    else if (alias === 'rsktestnet') {
        return 31;
    }

    return null;
}

export function isRipple(network: Network) {
    return network.alias === 'ripple';
}

export function isJingtum(network: Network) {
    return network.alias === 'jingtum';
}

export function isCasino(network: Network) {
    return network.alias === 'casino';
}

export function isEosio(network: Network) {
    return network.alias === 'eosio';
}

export function isFio(network: Network) {
    return network.alias === 'fio';
}

export function isCosmos(network: Network) {
    return network.alias === 'cosmos';
}

export function isThorchain(network: Network) {
    return network.alias === 'thorchain';
}

export function isWhitecoin(network: Network) {
    return network.alias === 'xwc';
}

export function isTerra(network: Network) {
    return network.alias === 'terra';
}

export function isStarname(network: Network) {
    return network.alias === 'starname';
}
