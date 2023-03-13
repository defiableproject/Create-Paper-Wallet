import { memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useAtomValue } from 'jotai/react';

import { bip39_A, keys_A, network_A } from '@/state/walletAdvanced';
import { autogenRoot, checkRoot, overwriteRoot } from '@/state/walletAdvanced/keys';

import { useStringHandler } from '@/hooks';

import type { FormControlProps } from '@chakra-ui/react';
import { FormControl, FormErrorMessage } from '@chakra-ui/react';
import { FormLabel } from '@/components/chakra';

import { ResponsiveTextarea } from '@/features/common';

export const MasterPrivateKeyField = memo(function MasterPrivateKeyField(Props: FormControlProps) {
    const { t } = useTranslation();

    const network = useAtomValue(network_A);
    const { seed } = useAtomValue(bip39_A);
    const { root, rootBase58, rootOk } = useAtomValue(keys_A);

    const handleChange = useStringHandler(overwriteRoot, []);

    useEffect(autogenRoot, [ seed, network ]);
    useEffect(checkRoot, [ root, rootBase58 ]);

    return (
        <FormControl {...Props} isRequired isInvalid={!rootOk}>
            <FormLabel title={t('walletAdvanced.keys.root.private')}>
                {t('walletAdvanced.keys.root.private_short')}
            </FormLabel>

            <ResponsiveTextarea value={rootBase58} onChange={handleChange} />

            <FormErrorMessage>
                <b>{t('walletAdvanced.keys.errors.invalidRoot')}</b>
            </FormErrorMessage>
        </FormControl>
    );
});
