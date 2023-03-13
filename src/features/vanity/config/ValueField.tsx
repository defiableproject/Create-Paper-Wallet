import { memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useAtomValue } from 'jotai/react';

import { config_A, network_A, status_A } from '@/state/vanity';
import { checkValue } from '@/state/vanity/config';

import { useAtomPatcher, useStringHandler } from '@/hooks';

import type { FormControlProps } from '@chakra-ui/react';
import { FormControl, FormErrorMessage, FormLabel, Input } from '@chakra-ui/react';

export const ValueField = memo(function ValueField(Props: FormControlProps) {
    const { t } = useTranslation();

    const network = useAtomValue(network_A);
    const [ { value, suffix, valueOk }, patchConfig ] = useAtomPatcher(config_A);
    const { running } = useAtomValue(status_A);

    const isHex = network.vanityPrefix[0] === '0x';

    const suffix_i18n = t(suffix ? 'vanity.config.mode.suffix' : 'vanity.config.mode.prefix');
    const error_i18n = t(isHex ? 'vanity.config.errors.invalidValue_hex' : 'vanity.config.errors.invalidValue');
    const text_i18n = `${t('vanity.config.value')} — ${suffix_i18n}`;

    const handleValue = useStringHandler(v => patchConfig(_ => _.value, v), [ patchConfig ]);

    useEffect(checkValue, [ value, network ]);

    return (
        <FormControl {...Props} isRequired isInvalid={!valueOk} isReadOnly={running}>
            <FormLabel>
                <b>{text_i18n}</b>
            </FormLabel>

            <Input
                value={value}
                onChange={handleValue}
                placeholder={suffix_i18n}
                autoComplete="off"
            />

            <FormErrorMessage>
                <b>{error_i18n}</b>
            </FormErrorMessage>
        </FormControl>
    );
});
