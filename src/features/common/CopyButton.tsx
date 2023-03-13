import { MutableRefObject, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import type { ButtonProps } from '@chakra-ui/react';
import { IconButton, Tooltip } from '@chakra-ui/react';
import { CopyIcon } from '@/components/icons';

interface Props extends ButtonProps {
    inputRef: MutableRefObject<HTMLInputElement | null>;
}

export function CopyButton(Props: Props) {
    const { inputRef, ...props } = Props;

    const { t } = useTranslation();

    const handleClick = useCallback(() => {
        if (!inputRef?.current) return;

        navigator.clipboard.writeText(inputRef.current.value);
    }, [ inputRef ]);

    const label = t('buttons.copyText');

    return (
        <Tooltip label={label} placement="top">
            <IconButton {...props} aria-label={label} onClick={handleClick}>
                <CopyIcon boxSize={5} />
            </IconButton>
        </Tooltip>
    );
}
