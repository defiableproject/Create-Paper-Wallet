import { memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useAtomValue } from 'jotai/react';

import { bip85_A, keys_A, network_A } from '@/state/walletAdvanced';
import { autogenChild } from '@/state/walletAdvanced/bip85';

import type { FormControlProps } from '@chakra-ui/react';
import { FormControl } from '@chakra-ui/react';
import { FormLabel } from '@/components/chakra';

import { ResponsiveTextarea } from '@/features/common';

export const ChildKeyField = memo(function ChildKeyField(Props: FormControlProps) {
    const { t } = useTranslation();

    const network = useAtomValue(network_A);
    const { rootBase58, bip85 } = useAtomValue(keys_A);
    const { application, index, bip39: { language, length }, hex: { bytes } } = useAtomValue(bip85_A);

    useEffect(autogenChild, [ application, rootBase58, network, index, language, length, bytes ]);

    return (
        <FormControl {...Props} isReadOnly>
            <FormLabel title={t('walletAdvanced.bip85.childKey')}>
                {t('walletAdvanced.bip85.childKey_short')}
            </FormLabel>

            <ResponsiveTextarea value={bip85} />
        </FormControl>
    );
});
