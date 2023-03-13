import { useTranslation } from 'react-i18next';

import type { ButtonProps } from '@chakra-ui/react';
import { IconButton, Tooltip } from '@chakra-ui/react';
import { QrIcon } from '@/components/icons';

type Props = ButtonProps

export function QrButton(Props: Props) {
    const { t } = useTranslation();

    const label = t('buttons.qrCode');

    return (
        <Tooltip label={label} placement="top">
            <IconButton {...Props} aria-label={label}>
                <QrIcon boxSize={5} />
            </IconButton>
        </Tooltip>
    );
}
