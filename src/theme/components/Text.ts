import type { StyleSingle, StyleSingleBase, StyleSingleVariant } from '@/types/chakra';

const baseStyle: StyleSingleBase = () => ({
    lineHeight: 'taller',
});

const varThird: StyleSingleVariant = () => ({
    color: 'gray.400',
});

const Text: StyleSingle = {
    baseStyle,
    variants: {
        '3rd': varThird,
    },
};

export default Text;
