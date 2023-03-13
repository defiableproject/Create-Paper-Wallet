import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import type { Application } from '@/types/libs/bip85';
import { bip85_A } from '@/state/walletAdvanced';

import { applicationsArr, getApplication } from '@/libs/bip85';
import { useAtomPatcher } from '@/hooks';

import type { FormControlProps } from '@chakra-ui/react';
import { FormControl } from '@chakra-ui/react';
import { FormLabel, Select } from '@/components/chakra';

export const ApplicationField = memo(function ApplicationField(Props: FormControlProps) {
    const { t } = useTranslation();

    const [ { application }, patchBip85 ] = useAtomPatcher(bip85_A);

    const handleChange = useCallback((v: Application | null) => {
        return patchBip85(_ => _.application, v ?? getApplication('wif'));
    }, [ patchBip85 ]);

    return (
        <FormControl {...Props}>
            <FormLabel title={t('walletAdvanced.bip85.application')}>
                {t('walletAdvanced.bip85.application_short')}
            </FormLabel>

            <Select
                options={applicationsArr}
                value={application}
                onChange={handleChange}
                getOptionLabel={v => v.label}
                getOptionValue={v => v.value}
                placeholder={t('walletAdvanced.bip85.application')}
            />
        </FormControl>
    );
});
