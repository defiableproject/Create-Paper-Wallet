import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useAtomValue } from 'jotai/react';

import { status_A } from '@/state/walletSimple';
import { stopSimple } from '@/state/walletSimple/controls';

import type { ButtonProps } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';

export const CancelButton = memo(function CancelButton(Props: ButtonProps) {
    const { t } = useTranslation();

    const { running } = useAtomValue(status_A);

    const handleClick = useCallback(() => running && stopSimple(), [ running ]);

    if (!running) {
        return null;
    }

    return (
        <Button
            colorScheme="gray"
            {...Props}
            onClick={handleClick}
            isDisabled={!running}
        >
            {t('walletSimple.controls.cancel')}
        </Button>
    );
});
