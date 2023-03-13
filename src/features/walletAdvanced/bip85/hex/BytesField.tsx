import { memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { bip85_A } from '@/state/walletAdvanced';
import { checkHexBytes } from '@/state/walletAdvanced/bip85';

import { useAtomPatcher, useStringHandler } from '@/hooks';

import type { FormControlProps } from '@chakra-ui/react';
import { FormControl, FormErrorMessage } from '@chakra-ui/react';
import { FormLabel, MonoInput } from '@/components/chakra';

export const BytesField = memo(function BytesField(Props: FormControlProps) {
    const { t } = useTranslation();

    const [ { hex: { bytes, bytesOk } }, patchBip85 ] = useAtomPatcher(bip85_A);

    useEffect(checkHexBytes, [ bytes ]);

    const handleChange = useStringHandler(v => patchBip85(_ => _.hex.bytes, +v), [ patchBip85 ]);

    return (
        <FormControl {...Props} isRequired isInvalid={!bytesOk}>
            <FormLabel title={t('walletAdvanced.bip85.hex.bytes')}>
                {t('walletAdvanced.bip85.hex.bytes_short')}
            </FormLabel>

            <MonoInput value={bytes} onChange={handleChange} type="number" min={16} max={64} />

            <FormErrorMessage>
                <b>{t('walletAdvanced.bip85.errors.invalidBytes')}</b>
            </FormErrorMessage>
        </FormControl>
    );
});
