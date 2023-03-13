import type { StyleSingle, StyleSingleBase } from '@/types/chakra';

const enabled = 'input:enabled + &' as const;
const checked = 'input:checked + &' as const;

const baseStyle: StyleSingleBase = () => ({
    borderRadius: 'base',
    fontSize: '0.95rem',
    fontWeight: 'medium',
    px: 2,
    py: 1.5,
    transitionProperty: 'common',
    transitionDuration: 'normal',
    userSelect: 'none',

    [enabled]: {
        cursor: 'pointer',
    },

    bgColor: 'mirage.600',
    color: 'white',

    _hover: {
        bgColor: 'mirage.500',
    },
    [checked]: {
        bgColor: 'primary',
        color: 'gray.800',

        fontWeight: 'medium',
    },
});

const BadgeInput: StyleSingle = {
    baseStyle,
};

export default BadgeInput;
