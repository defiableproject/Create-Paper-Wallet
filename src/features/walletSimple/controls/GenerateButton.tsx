import { memo, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAtomValue } from 'jotai/react';

import { config_A, result_A, status_A } from '@/state/walletSimple';
import { startSimple } from '@/state/walletSimple/controls';

import type { ButtonProps } from '@chakra-ui/react';
import { Button, useBoolean } from '@chakra-ui/react';

export const GenerateButton = memo(function GenerateButton(Props: ButtonProps) {
    const navigate = useNavigate();
    const { t } = useTranslation();

    const { quantityOk } = useAtomValue(config_A);
    const { running } = useAtomValue(status_A);
    const result = useAtomValue(result_A);

    const [ shouldListen, setShouldListen ] = useBoolean(false);

    const isDisabled = running || !quantityOk;

    useEffect(() => {
        if (!shouldListen) return;
        if (!result.length) return;

        navigate('/wallet/simple/addresses');
    }, [ shouldListen, result.length, navigate ]);

    const handleClick = useCallback(() => {
        if (isDisabled) return;

        startSimple();
        setShouldListen.on();
    }, [ isDisabled, setShouldListen ]);

    return (
        <Button
            colorScheme="blue"
            {...Props}
            onClick={handleClick}
            isLoading={running}
            isDisabled={isDisabled}
        >
            {t('walletSimple.controls.generate')}
        </Button>
    );
});
