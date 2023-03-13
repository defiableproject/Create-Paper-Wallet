import QRCode from 'react-qr-code';

import type { SquareProps } from '@chakra-ui/react';
import { Square } from '@chakra-ui/react';

interface Props extends SquareProps {
    value: string;
}

export function AddressPaperQR(Props: Props) {
    const { children, value, ...props } = Props;

    return (
        <Square {...props} bg="white">
            <QRCode viewBox="0 0 256 256" value={value} />
        </Square>
    );
}
