import { vanityStore } from '@/state/vanity';

import { storePatcher, storeValue } from '@/utils/zustand';

export function incrementThreads() {
    const patch = storePatcher(vanityStore);

    patch(_ => _.config.threads, prev => prev + 1);
}

export function decrementThreads() {
    const patchVanity = storePatcher(vanityStore);

    patchVanity(_ => _.config.threads, prev => prev <= 1 ? 1 : prev - 1);
}

export function checkValue() {
    const patch = storePatcher(vanityStore);
    const { network, config: { value } } = storeValue(vanityStore);

    const isHex = network.vanityPrefix[0] === '0x';
    const hexAssert = !!value.match(/[^a-f0-9]/gi);

    patch(_ => _.config.valueOk, !value || !isHex || !hexAssert);
}
