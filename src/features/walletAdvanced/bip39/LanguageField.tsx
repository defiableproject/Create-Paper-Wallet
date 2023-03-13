import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import type { FormControlProps } from '@chakra-ui/react';
import { FormControl } from '@chakra-ui/react';
import { FormLabel } from '@/components/chakra';

import { LanguageGroup } from '@/features/walletAdvanced/bip39/index';

export const LanguageField = memo(function LanguageField(Props: FormControlProps) {
    const { t } = useTranslation();

    return (
        <FormControl {...Props}>
            <FormLabel title={t('walletAdvanced.bip39.language')}>
                {t('walletAdvanced.bip39.language_short')}
            </FormLabel>

            <LanguageGroup />
        </FormControl>
    );
});
