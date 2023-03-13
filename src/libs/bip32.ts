import type { HDNode } from '@/types/libs/bitcoin';

import type { FullAddress } from '@/libs/addresses';
import { keypairToAddress } from '@/libs/addresses';

export function calcExtendedRoot(root: HDNode, path: string) {
    let key: HDNode | null = root;
    const pathSegments = path.split('/');

    for (const bit of pathSegments) {
        const index = parseInt(bit);

        if (isNaN(index)) {
            continue;
        }

        const isPrivate = !key?.isNeutered();
        const isHardened = bit.at(-1) === '\'';

        if (isHardened && !isPrivate) {
            return null;
        }
        else if (isHardened) {
            key = key?.deriveHardened(index) ?? null;
        }
        else {
            key = key?.derive(index) ?? null;
        }
    }

    return key;
}

export function calcKeysFromExtended(extended: HDNode) {
    const extPublic = extended.neutered().toBase58();
    let extPrivate = 'NA';

    if (!extended.isNeutered()) {
        extPrivate = extended.toBase58();
    }

    return [ extPrivate, extPublic ] as const;
}

export function generateHDAddress(extended: HDNode, path: string, index: number, useHardened = true) {
    const _path = (path + '/' + index) + (useHardened ? '\'' : '');

    const key = useHardened ? extended.deriveHardened(index) : extended.derive(index);
    const hasPrivate = !key.isNeutered();

    const address = keypairToAddress(key.keyPair, hasPrivate);

    return { path: _path, ...address } as FullAddress;
}
