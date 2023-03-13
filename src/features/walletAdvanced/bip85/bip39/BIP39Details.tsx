import { useAtomValue } from 'jotai/react';

import { bip85_A } from '@/state/walletAdvanced';

import { LanguageField, LengthField } from '@/features/walletAdvanced/bip85/bip39';

export function BIP39Details() {
    const { application } = useAtomValue(bip85_A);

    if (application?.value !== 'bip39') {
        return null;
    }

    return (<>
        <LanguageField />
        <LengthField />
    </>);
}
