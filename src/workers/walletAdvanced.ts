/// <reference lib="WebWorker" />

import '@/libs/browser/libs';
import type { ErrorMessage } from '@/types/workers';
import type { AddressesMessage, IncomingMessage, WorkerConfig } from '@/types/workers/walletAdvanced';

import type { FullAddress } from '@/libs/addresses';
import { calcExtendedRoot, generateHDAddress } from '@/libs/bip32';

declare const self: DedicatedWorkerGlobalScope;

function getAdvancedAddresses(config: WorkerConfig): void {
    const { rootBase58, network, path, quantity, startingIndex, useHardened } = config;

    const root = libs.bitcoin.HDNode.fromBase58(rootBase58, network);
    const extended = calcExtendedRoot(root, path)!;

    const addresses: FullAddress[] = [];
    const max = startingIndex + quantity;

    for (let index = startingIndex; index < max; index++) {
        const address = generateHDAddress(extended, path, index, useHardened);

        addresses.push(address);
    }

    self.postMessage({ addresses } as AddressesMessage);
}

self.onmessage = function (event: MessageEvent<IncomingMessage>) {
    try {
        getAdvancedAddresses(event.data);
    } catch (error) {
        console.log(error);

        self.postMessage({ error: error?.toString() } as ErrorMessage);
    }
};

export default self;
