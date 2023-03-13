import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useAtomValue } from 'jotai/react';

import { keys_A } from '@/state/walletAdvanced';

import type { FormControlProps } from '@chakra-ui/react';
import { FormControl } from '@chakra-ui/react';
import { FormLabel } from '@/components/chakra';

import { ResponsiveTextarea } from '@/features/common';

export const ExtendedPrivateKeyField = memo(function ExtendedPrivateKeyField(Props: FormControlProps) {
    const { t } = useTranslation();

    const { extPrivate } = useAtomValue(keys_A);

    return (
        <FormControl {...Props} isReadOnly>
            <FormLabel title={t('walletAdvanced.keys.extended.private')}>
                {t('walletAdvanced.keys.extended.private_short')}
            </FormLabel>

            <ResponsiveTextarea value={extPrivate} />
        </FormControl>
    );
});
