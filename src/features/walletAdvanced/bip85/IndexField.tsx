import { memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { bip85_A } from '@/state/walletAdvanced';
import { checkIndex } from '@/state/walletAdvanced/bip85';

import { useAtomPatcher, useStringHandler } from '@/hooks';

import type { FormControlProps } from '@chakra-ui/react';
import { FormControl, FormErrorMessage } from '@chakra-ui/react';
import { FormLabel, MonoInput } from '@/components/chakra';

export const IndexField = memo(function IndexField(Props: FormControlProps) {
    const { t } = useTranslation();

    const [ { index, indexOk }, patchBip85 ] = useAtomPatcher(bip85_A);

    useEffect(checkIndex, [ index ]);

    const handleChange = useStringHandler(v => patchBip85(_ => _.index, +v), [ patchBip85 ]);

    return (
        <FormControl {...Props} isRequired isInvalid={!indexOk}>
            <FormLabel title={t('walletAdvanced.bip85.index')}>
                {t('walletAdvanced.bip85.index_short')}
            </FormLabel>

            <MonoInput value={index} onChange={handleChange} type="number" min={0} />

            <FormErrorMessage>
                <b>{t('walletAdvanced.bip85.errors.invalidIndex')}</b>
            </FormErrorMessage>
        </FormControl>
    );
});
