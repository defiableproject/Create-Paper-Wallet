import { memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useAtomValue } from 'jotai/react';

import { derivation_A, keys_A } from '@/state/walletAdvanced';
import { autogenExtended } from '@/state/walletAdvanced/keys';
import { checkPath } from '@/state/walletAdvanced/derivation';

import { useAtomPatcher, useStringHandler } from '@/hooks';

import type { FormControlProps } from '@chakra-ui/react';
import { FormControl, FormErrorMessage } from '@chakra-ui/react';
import { FormLabel, MonoInput } from '@/components/chakra';

export const PathField = memo(function PathField(Props: FormControlProps) {
    const { t } = useTranslation();

    const { root } = useAtomValue(keys_A);
    const [ { path, pathOk, pathReadonly }, patchDerivation ] = useAtomPatcher(derivation_A);

    useEffect(checkPath, [ path ]);
    useEffect(autogenExtended, [ root, path ]);

    const handleChange = useStringHandler(v => patchDerivation(_ => _.path, v), [ patchDerivation ]);

    return (
        <FormControl {...Props} isRequired isInvalid={!pathOk} isReadOnly={pathReadonly}>
            <FormLabel title={t('walletAdvanced.derivation.path')}>
                {t('walletAdvanced.derivation.path_short')}
            </FormLabel>

            <MonoInput value={path} onChange={handleChange} />

            <FormErrorMessage>
                <b>{t('walletAdvanced.derivation.errors.invalidPath')}</b>
            </FormErrorMessage>
        </FormControl>
    );
});
