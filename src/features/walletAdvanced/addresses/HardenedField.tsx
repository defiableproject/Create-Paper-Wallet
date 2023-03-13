import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { addresses_A } from '@/state/walletAdvanced';

import { useAtomPatcher, useCheckHandler } from '@/hooks';

import type { FormControlProps } from '@chakra-ui/react';
import { FormControl, Switch } from '@chakra-ui/react';
import { FormLabel } from '@/components/chakra';

export const HardenedField = memo(function HardenedField(Props: FormControlProps) {
    const { t } = useTranslation();

    const [ { useHardened }, patchAddresses ] = useAtomPatcher(addresses_A);

    const handleHardened = useCheckHandler(c => patchAddresses(_ => _.useHardened, c), [ patchAddresses ]);

    return (
        <FormControl display="flex" alignItems="center" {...Props}>
            <FormLabel title={t('walletAdvanced.addresses.useHardened')} cursor="pointer" mx={0}>
                {t('walletAdvanced.addresses.useHardened_short')}
            </FormLabel>

            <Switch isChecked={useHardened} onChange={handleHardened} ml={6} />
        </FormControl>
    );
});
