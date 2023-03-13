import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import type { Lang } from '@/types/libs/bip39';
import { bip85_A } from '@/state/walletAdvanced';

import { getMnemonicLanguage, mnemonicLanguagesArr } from '@/libs/bip85';
import { useAtomPatcher } from '@/hooks';

import type { FormControlProps } from '@chakra-ui/react';
import { FormControl } from '@chakra-ui/react';
import { FormLabel, Select } from '@/components/chakra';

export const LanguageField = memo(function LanguageField(Props: FormControlProps) {
    const { t } = useTranslation();

    const [ { bip39: { language } }, patchBip85 ] = useAtomPatcher(bip85_A);

    const handleChange = useCallback((v: Lang | null) => {
        return patchBip85(_ => _.bip39.language, v ?? getMnemonicLanguage(0));
    }, [ patchBip85 ]);

    return (
        <FormControl {...Props}>
            <FormLabel title={t('walletAdvanced.bip85.bip39.language')}>
                {t('walletAdvanced.bip85.bip39.language_short')}
            </FormLabel>

            <Select
                options={mnemonicLanguagesArr}
                value={language}
                onChange={handleChange}
                getOptionLabel={v => v.label}
                getOptionValue={v => v.id + ''}
                placeholder={t('walletAdvanced.bip85.bip39.language')}
            />
        </FormControl>
    );
});
