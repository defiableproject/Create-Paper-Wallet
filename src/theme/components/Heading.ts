import type { StyleSingle, StyleSingleBase } from '@/types/chakra';

const baseStyle: StyleSingleBase = () => ({
    _light: {
        fontWeight: 'semibold',

        '&:is(h1)': {
            fontWeight: 'bold',
        },
        '&:is(h5)': {
            fontWeight: 'medium',
        },
    },
    _dark: {
        fontWeight: 'medium',

        '&:is(h1)': {
            fontWeight: 'semibold',
        },
    },
});

const Heading: StyleSingle = {
    baseStyle,
};

export default Heading;
