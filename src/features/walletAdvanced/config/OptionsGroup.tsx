import { useTranslation } from 'react-i18next';

import type { GridProps } from '@chakra-ui/react';
import { Grid } from '@chakra-ui/react';

import { OptionsCheckbox } from '@/features/walletAdvanced/config';

export function OptionsGroup(Props: GridProps) {
    const { t } = useTranslation();

    return (
        <Grid gap={6} templateColumns={{ lg: `repeat(2, 1fr)` }} w="full" {...Props}>
            <OptionsCheckbox
                value="bip39"
                label={t('walletAdvanced.options.bip39')}
                isDisabled
            />

            <OptionsCheckbox
                value="masterKey"
                label={t('walletAdvanced.options.masterKey')}
                isDisabled
            />

            <OptionsCheckbox
                value="bip85"
                label={t('walletAdvanced.options.bip85')}
            />

            <OptionsCheckbox
                value="derivation"
                label={t('walletAdvanced.options.derivation')}
            />

            <OptionsCheckbox
                value="addresses"
                label={t('walletAdvanced.options.addresses')}
                isDisabled
            />
        </Grid>
    );
}
