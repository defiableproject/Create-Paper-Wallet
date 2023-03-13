import { memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { addresses_A } from '@/state/walletAdvanced';
import { checkQuantity } from '@/state/walletAdvanced/addresses';

import { useAtomPatcher, useStringHandler } from '@/hooks';

import type { FormControlProps } from '@chakra-ui/react';
import { FormControl, FormErrorMessage } from '@chakra-ui/react';
import { FormLabel, MonoInput } from '@/components/chakra';

export const QuantityField = memo(function QuantityField(Props: FormControlProps) {
    const { t } = useTranslation();

    const [ { quantity, quantityOk }, patchBip85 ] = useAtomPatcher(addresses_A);

    useEffect(checkQuantity, [ quantity ]);

    const handleChange = useStringHandler(v => patchBip85(_ => _.quantity, +v), [ patchBip85 ]);

    return (
        <FormControl {...Props} isRequired isInvalid={!quantityOk}>
            <FormLabel title={t('walletAdvanced.addresses.quantity')}>
                {t('walletAdvanced.addresses.quantity_short')}
            </FormLabel>

            <MonoInput value={quantity} onChange={handleChange} type="number" min={1} />

            <FormErrorMessage>
                <b>{t('walletAdvanced.addresses.errors.quantityLowerThan1')}</b>
            </FormErrorMessage>
        </FormControl>
    );
});
