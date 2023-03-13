import type { StyleSingle, StyleSingleBase } from '@/types/chakra';

const baseStyle: StyleSingleBase = () => ({
    fontWeight: 'semibold',
});

const Button: StyleSingle = {
    baseStyle,
    defaultProps: {
        colorScheme: 'blue',
    },
};

export default Button;
