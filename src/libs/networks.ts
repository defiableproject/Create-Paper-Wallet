import type { Network, NetworkPartial } from '@/types/libs/bitcoin';

export function networks() {
    return libs.bitcoin.networks;
}

export function getNetwork(alias: string) {
    return libs.bitcoin.networks[alias] ?? undefined;
}

export function addNetwork(data: NetworkPartial): Network {
    data.bip49available ??= true;
    data.segwitAvailable ??= true;

    // @ts-expect-error: Readonly
    return libs.bitcoin.networks[data.alias] = data;
}

