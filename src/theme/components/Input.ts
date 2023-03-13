import type { StyleSingle, StyleSingleBase, StyleSingleVariant } from '@/types/chakra';

const baseStyle: StyleSingleBase = () => ({
    '&:is([type="number"], [type="date"], [type="time"])': {
        fontFamily: 'mono',
    },
});

const varFlushed: StyleSingleVariant = () => ({
    borderLeft: 'none',
    borderRight: 'none',
    borderTop: 'none',
    borderBottom: '1px solid',
    borderRadius: 'none',
});

const Input: StyleSingle = {
    baseStyle,
    variants: {
        flushed: varFlushed,
    },
    defaultProps: {
        colorScheme: 'blue',
    },
};

export default Input;
