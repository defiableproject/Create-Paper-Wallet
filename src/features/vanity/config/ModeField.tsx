import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useAtomValue } from 'jotai/react';

import { config_A, status_A } from '@/state/vanity';

import { useAtomPatcher, useCheckHandler } from '@/hooks';

import type { FormControlProps } from '@chakra-ui/react';
import { FormControl, FormLabel, Switch } from '@chakra-ui/react';

export const ModeField = memo(function ModeField(Props: FormControlProps) {
    const { t } = useTranslation();

    const [ { suffix }, patchConfig ] = useAtomPatcher(config_A);
    const { running } = useAtomValue(status_A);

    const handleMode = useCheckHandler(c => patchConfig(_ => _.suffix, c), [ patchConfig ]);

    return (
        <FormControl
            display="flex"
            alignItems="center"
            {...Props}
            isDisabled={running}
        >
            <FormLabel cursor="pointer" m={0}>
                <b>{t('vanity.config.mode.prefix')}</b>
            </FormLabel>

            <Switch isChecked={suffix} onChange={handleMode} mx={3} />

            <FormLabel cursor="pointer" m={0}>
                <b>{t('vanity.config.mode.suffix')}</b>
            </FormLabel>
        </FormControl>
    );
});
