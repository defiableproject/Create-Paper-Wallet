import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useAtomValue } from 'jotai/react';

import { bip39_A } from '@/state/walletAdvanced';
import { autogenSeed, checkSeed, overwriteSeed } from '@/state/walletAdvanced/bip39';

import { useStringHandler } from '@/hooks';

import type { FormControlProps } from '@chakra-ui/react';
import { FormControl, FormErrorMessage } from '@chakra-ui/react';
import { FormLabel } from '@/components/chakra';

import { ResponsiveTextarea } from '@/features/common';

export function SeedField(Props: FormControlProps) {
    const { t } = useTranslation();

    const { words, wordsOk, passphrase, seed, seedOk } = useAtomValue(bip39_A);

    const handleChange = useStringHandler(overwriteSeed, []);

    useEffect(autogenSeed, [ words, wordsOk, passphrase ]);
    useEffect(checkSeed, [ seed ]);

    return (
        <FormControl {...Props} isInvalid={!seedOk}>
            <FormLabel title={t('walletAdvanced.bip39.seed')}>
                {t('walletAdvanced.bip39.seed_short')}
            </FormLabel>

            <ResponsiveTextarea value={seed} onChange={handleChange} />

            <FormErrorMessage>
                <b>{t('walletAdvanced.bip39.errors.invalidSeed')}</b>
            </FormErrorMessage>
        </FormControl>
    );
}
