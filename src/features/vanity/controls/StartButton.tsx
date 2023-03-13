import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useAtomValue } from 'jotai/react';

import { config_A, status_A } from '@/state/vanity';
import { startVanity } from '@/state/vanity/controls';

import type { ButtonProps } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';

export const StartButton = memo(function StartButton(Props: ButtonProps) {
    const { t } = useTranslation();

    const { value, valueOk } = useAtomValue(config_A);
    const { running } = useAtomValue(status_A);

    const handleClick = useCallback(() => running || startVanity(), [ running ]);

    return (
        <Button
            colorScheme="blue"
            w="full"
            {...Props}
            onClick={handleClick}
            isLoading={running}
            isDisabled={!value || !valueOk}
        >
            {t('vanity.controls.start')}
        </Button>
    );
});
