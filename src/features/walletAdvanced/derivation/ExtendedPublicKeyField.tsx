import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useAtomValue } from 'jotai/react';

import { keys_A } from '@/state/walletAdvanced';

import type { FormControlProps } from '@chakra-ui/react';
import { FormControl } from '@chakra-ui/react';
import { FormLabel } from '@/components/chakra';

import { ResponsiveTextarea } from '@/features/common';

export const ExtendedPublicKeyField = memo(function ExtendedPublicKeyField(Props: FormControlProps) {
    const { t } = useTranslation();

    const { extPublic } = useAtomValue(keys_A);

    return (
        <FormControl {...Props} isReadOnly>
            <FormLabel title={t('walletAdvanced.keys.extended.public')}>
                {t('walletAdvanced.keys.extended.public_short')}
            </FormLabel>

            <ResponsiveTextarea value={extPublic} />
        </FormControl>
    );
});
