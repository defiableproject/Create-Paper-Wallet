import { MutableRefObject, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import type { ButtonProps } from '@chakra-ui/react';
import { IconButton, Tooltip } from '@chakra-ui/react';
import { SelectIcon } from '@/components/icons';

interface Props extends ButtonProps {
    inputRef: MutableRefObject<HTMLInputElement | null>;
}

export function SelectButton(Props: Props) {
    const { inputRef, ...props } = Props;

    const { t } = useTranslation();

    const handleClick = useCallback(() => {
        if (!inputRef?.current) return;

        inputRef.current.select();
    }, [ inputRef ]);

    const label = t('buttons.selectText');

    return (
        <Tooltip label={label} placement="top">
            <IconButton {...props} aria-label={label} onClick={handleClick}>
                <SelectIcon boxSize={5} />
            </IconButton>
        </Tooltip>
    );
}
