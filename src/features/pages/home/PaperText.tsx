import type { TextProps } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';

export function PaperText(Props: TextProps) {
    const styles: TextProps = {
        fontSize: 'md',
        fontWeight: 'light',
        letterSpacing: '0.5px',
    };

    return <Text {...styles} {...Props} />;
}
