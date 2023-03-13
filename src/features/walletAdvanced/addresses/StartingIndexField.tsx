import { memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { addresses_A } from '@/state/walletAdvanced';
import { checkStartingIndex } from '@/state/walletAdvanced/addresses';

import { useAtomPatcher, useStringHandler } from '@/hooks';

import type { FormControlProps } from '@chakra-ui/react';
import { FormControl, FormErrorMessage } from '@chakra-ui/react';
import { FormLabel, MonoInput } from '@/components/chakra';

export const StartingIndexField = memo(function StartingIndexField(Props: FormControlProps) {
    const { t } = useTranslation();

    const [ { startingIndex, startingIndexOk }, patchBip85 ] = useAtomPatcher(addresses_A);

    useEffect(checkStartingIndex, [ startingIndex ]);

    const handleChange = useStringHandler(v => patchBip85(_ => _.startingIndex, +v), [ patchBip85 ]);

    return (
        <FormControl {...Props} isRequired isInvalid={!startingIndexOk}>
            <FormLabel title={t('walletAdvanced.addresses.startingIndex')}>
                {t('walletAdvanced.addresses.startingIndex_short')}
            </FormLabel>

            <MonoInput value={startingIndex} onChange={handleChange} type="number" min={0} />

            <FormErrorMessage>
                <b>{t('walletAdvanced.addresses.errors.startingIndexLowerThan0')}</b>
            </FormErrorMessage>
        </FormControl>
    );
});
