import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useAtomValue } from 'jotai/react';

import { status_A } from '@/state/vanity';
import { stopVanity } from '@/state/vanity/controls';

import type { ButtonProps } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';

export const StopButton = memo(function StopButton(Props: ButtonProps) {
    const { t } = useTranslation();

    const { running } = useAtomValue(status_A);

    const handleClick = useCallback(() => running && stopVanity(), [ running ]);

    return (
        <Button
            colorScheme="gray"
            w="full"
            {...Props}
            onClick={handleClick}
            isDisabled={!running}
        >
            {t('vanity.controls.stop')}
        </Button>
    );
});
