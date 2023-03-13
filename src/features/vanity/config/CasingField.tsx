import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useAtomValue } from 'jotai/react';

import { config_A, status_A } from '@/state/vanity';

import { useAtomPatcher, useCheckHandler } from '@/hooks';

import type { FormControlProps } from '@chakra-ui/react';
import { Checkbox, FormControl, FormLabel } from '@chakra-ui/react';

export const CasingField = memo(function CasingField(Props: FormControlProps) {
    const { t } = useTranslation();

    const [ { caseSensitive }, patchConfig ] = useAtomPatcher(config_A);
    const { running } = useAtomValue(status_A);

    const handleCasing = useCheckHandler(c => patchConfig(_ => _.caseSensitive, c), [ patchConfig ]);

    return (
        <FormControl
            display="flex"
            alignItems="center"
            {...Props}
            isDisabled={running}
        >
            <Checkbox isChecked={caseSensitive} onChange={handleCasing} mr={3} />

            <FormLabel cursor="pointer" my={0}>
                <b>{t('vanity.config.caseSensitive')}</b>
            </FormLabel>
        </FormControl>
    );
});
