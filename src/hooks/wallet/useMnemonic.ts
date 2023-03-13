import { useMemo } from 'react';
import { useAtomValue } from 'jotai/react';

import { bip39_A } from '@/state/walletAdvanced';
import { overwriteLanguage } from '@/state/walletAdvanced/bip39';

import { localeMnemonic } from '@/utils/walletAdvanced/bip39';

export function useMnemonic() {
    const { language: lang } = useAtomValue(bip39_A);

    const mnemonics = useMemo(() => localeMnemonic(lang.alias), [ lang.alias ]);

    return {
        lang,
        langId: lang.id,
        langAlias: lang.alias,
        setLang: overwriteLanguage,
        ...mnemonics,
    } as const;
}
