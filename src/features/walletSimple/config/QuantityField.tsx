import { memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { config_A } from '@/state/walletSimple';
import { checkQuantity } from '@/state/walletSimple/config';

import { useAtomPatcher, useStringHandler } from '@/hooks';

import type { FormControlProps } from '@chakra-ui/react';
import { FormControl, FormErrorMessage } from '@chakra-ui/react';
import { FormLabel, MonoInput } from '@/components/chakra';

export const QuantityField = memo(function QuantityField(Props: FormControlProps) {
    const { t } = useTranslation();

    const [ { quantity, quantityOk }, patchBip85 ] = useAtomPatcher(config_A);

    useEffect(checkQuantity, [ quantity ]);

    const handleChange = useStringHandler(v => patchBip85(_ => _.quantity, +v), [ patchBip85 ]);

    return (
        <FormControl {...Props} isRequired isInvalid={!quantityOk}>
            <FormLabel title={t('walletSimple.config.quantity')}>
                {t('walletSimple.config.quantity_short')}
            </FormLabel>

            <MonoInput value={quantity} onChange={handleChange} type="number" min={1} />

            <FormErrorMessage>
                <b>{t('walletSimple.config.errors.invalidQuantity')}</b>
            </FormErrorMessage>
        </FormControl>
    );
});
