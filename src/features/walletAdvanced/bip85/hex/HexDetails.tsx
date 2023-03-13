import { useAtomValue } from 'jotai/react';

import { bip85_A } from '@/state/walletAdvanced';

import { BytesField } from '@/features/walletAdvanced/bip85/hex';

export function HexDetails() {
    const { application } = useAtomValue(bip85_A);

    if (application?.value !== 'hex') {
        return null;
    }

    return (
        <BytesField />
    );
}
