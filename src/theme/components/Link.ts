import type { StyleSingle, StyleSingleBase } from '@/types/chakra';

const baseStyle: StyleSingleBase = () => ({
    color: 'primary',
    fontWeight: 'medium',
});

const Link: StyleSingle = {
    baseStyle,
};

export default Link;
