/// <reference lib="WebWorker" />

import '@/libs/browser/libs';

import type { Network } from '@/types/libs/bitcoin';
import type { ErrorMessage } from '@/types/workers';
import type { AddressMessage, AttemptMessage, IncomingMessage, WorkerConfig } from '@/types/workers/vanity';

import type { Address } from '@/libs/addresses';

import type { KeypairTransformer } from '@/utils/address/transform';
import { getAddressTransformer } from '@/utils/address';

declare const self: DedicatedWorkerGlobalScope;

const attemptsToReturn = 150;

function generateAddress(network: Network, transformer: KeypairTransformer) {
    const keypair = libs.bitcoin.ECPair.makeRandom({ network });

    return transformer(keypair, true, false);
}

function checkVanity(address: Address | null, config: WorkerConfig): boolean {
    if (!address) {
        return false;
    }

    let addr = address.address;
    const value = config.value;

    for (const prefix of config.network.vanityPrefix) {
        if (addr.indexOf(prefix) !== 0) continue;

        addr = addr.substring(prefix.length);
    }

    if (!config.caseSensitive) {
        addr = addr.toLowerCase();
    }

    if (config.suffix) {
        return addr.indexOf(value) === addr.length - value.length;
    }

    return addr.indexOf(value) === 0;
}

function getVanityAddress(config: WorkerConfig): void {
    const { network } = config;

    if (!config.caseSensitive) {
        config.value = config.value.toLowerCase();
    }

    let attempts = 0;
    let address: Address;
    const transformer = getAddressTransformer(network);

    do {
        if (attempts >= attemptsToReturn) {
            self.postMessage({ attempts } as AttemptMessage);

            attempts = 0;
        }

        address = generateAddress(network, transformer);
        attempts++;
    } while (!checkVanity(address, config));

    self.postMessage({ address, attempts } as AddressMessage);
}

self.onmessage = function (event: MessageEvent<IncomingMessage>) {
    try {
        getVanityAddress(event.data);
    } catch (error) {
        console.log(error);

        self.postMessage({ error: error?.toString() } as ErrorMessage);
    }
};

export default self;
