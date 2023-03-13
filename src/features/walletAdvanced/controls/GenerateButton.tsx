import { memo, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAtomValue } from 'jotai/react';

import { addresses_A, derivation_A, keys_A, result_A, status_A } from '@/state/walletAdvanced';
import { startAdvanced } from '@/state/walletAdvanced/controls';

import type { ButtonProps } from '@chakra-ui/react';
import { Button, useBoolean } from '@chakra-ui/react';

export const GenerateButton = memo(function GenerateButton(Props: ButtonProps) {
    const navigate = useNavigate();
    const { t } = useTranslation();

    const { extended } = useAtomValue(keys_A);
    const { pathOk } = useAtomValue(derivation_A);
    const { quantityOk, startingIndexOk } = useAtomValue(addresses_A);
    const { running } = useAtomValue(status_A);
    const result = useAtomValue(result_A);

    const [ shouldListen, setShouldListen ] = useBoolean(false);

    const extendedOk = !!extended;
    const isDisabled = running || !extendedOk || !pathOk || !quantityOk || !startingIndexOk;

    useEffect(() => {
        if (!shouldListen) return;
        if (!result.length) return;

        navigate('/wallet/advanced/addresses');
    }, [ shouldListen, result.length, navigate ]);

    const handleClick = useCallback(() => {
        if (isDisabled) return;

        startAdvanced();
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
            {t('walletAdvanced.controls.generate')}
        </Button>
    );
});
