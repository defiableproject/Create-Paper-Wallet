/// <reference lib="WebWorker" />

import '@/libs/browser/libs';

import type { Network } from '@/types/libs/bitcoin';
import type { ErrorMessage } from '@/types/workers';
import type { AddressesMessage, IncomingMessage, WorkerConfig } from '@/types/workers/walletSimple';

import type { Address } from '@/libs/addresses';

import type { KeypairTransformer } from '@/utils/address/transform';
import { getAddressTransformer } from '@/utils/address';

declare const self: DedicatedWorkerGlobalScope;

function generateAddress(network: Network, transformer: KeypairTransformer) {
    const keypair = libs.bitcoin.ECPair.makeRandom({ network });

    return transformer(keypair, true, false);
}

function getSimpleAddresses(config: WorkerConfig): void {
    const { network } = config;

    const addresses: Address[] = [];
    const transformer = getAddressTransformer(network);

    while (addresses.length < config.quantity) {
        addresses.push(generateAddress(network, transformer));
    }

    self.postMessage({ addresses } as AddressesMessage);
}

self.onmessage = function (event: MessageEvent<IncomingMessage>) {
    try {
        getSimpleAddresses(event.data);
    } catch (error) {
        console.log(error);

        self.postMessage({ error: error?.toString() } as ErrorMessage);
    }
};

export default self;
