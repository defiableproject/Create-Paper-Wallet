import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import type { MnemonicLength } from '@/types/libs/bip85';
import { bip85_A } from '@/state/walletAdvanced';

import { getMnemonicLength, mnemonicLengthsArr } from '@/libs/bip85';
import { useAtomPatcher } from '@/hooks';

import type { FormControlProps } from '@chakra-ui/react';
import { FormControl } from '@chakra-ui/react';
import { FormLabel, Select } from '@/components/chakra';

export const LengthField = memo(function LengthField(Props: FormControlProps) {
    const { t } = useTranslation();

    const [ { bip39: { length } }, patchBip85 ] = useAtomPatcher(bip85_A);

    const handleChange = useCallback((v: MnemonicLength | null) => {
        return patchBip85(_ => _.bip39.length, v ?? getMnemonicLength(12));
    }, [ patchBip85 ]);

    return (
        <FormControl {...Props}>
            <FormLabel title={t('walletAdvanced.bip85.bip39.length')}>
                {t('walletAdvanced.bip85.bip39.length_short')}
            </FormLabel>

            <Select
                options={mnemonicLengthsArr}
                value={length}
                onChange={handleChange}
                getOptionLabel={v => t(v.i18n as never)}
                getOptionValue={v => v.value + ''}
                placeholder={t('walletAdvanced.bip85.bip39.length')}
            />
        </FormControl>
    );
});
