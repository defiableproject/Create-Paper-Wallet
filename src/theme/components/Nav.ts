import type { StyleMulti, StyleMultiBase, StyleMultiVariant } from '@/types/chakra';

import { anatomy } from '@chakra-ui/anatomy';
import { tColor } from '@/utils/chakra';

export const navAnatomy = anatomy('Nav', {
    wrapper: {
        className: 'wrapper',
        selector: 'wrapper',
    },
    group: {
        className: 'group',
        selector: 'group',
    },
    item: {
        className: 'item',
        selector: 'item',
    },
    itemLink: {
        className: 'itemLink',
        selector: 'itemLink',
    },
});

const baseStyle: StyleMultiBase<typeof navAnatomy> = () => ({
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        flex: '0 0',
        justifyContent: 'flex-start',
        left: 0,
        position: 'sticky',
        top: 0,
        zIndex: 9,
    },
    group: {
        alignItems: 'stretch',
        display: 'flex',
        flexWrap: 'nowrap',
        w: 'full',
    },
    item: {
        display: 'flex',

        '& > span': {
            w: 'full',
        },
    },
    itemLink: {
        alignItems: 'center',
        color: 'mirage.100',
        display: 'flex',
        justifyContent: 'center',
        w: 'full',
    },
});

const varHorizontal: StyleMultiVariant<typeof navAnatomy> = () => ({
    wrapper: {
        bgColor: 'mirage.700',
    },
    item: {
        alignItems: 'stretch',
        justifyContent: 'stretch',

        '& > span': {
            alignItems: 'stretch',
            display: 'flex',
            h: 'full',
            justifyContent: 'stretch',
        },
    },
    itemLink: {
        px: { base: 6, md: 8 },
        py: 3,

        _hover: {
            color: 'primary',
            boxShadow: `0 -4px 0 inset ${tColor('mirage.100')}`,
        },
        '.active &': {
            color: 'primary',
            boxShadow: `0 -4px 0 inset ${tColor('primary')}`,
        },
    },
});

const varVertical: StyleMultiVariant<typeof navAnatomy> = () => ({
    wrapper: {
        bgColor: 'white',

        h: '100vh',
        py: 4,
    },
    group: {
        flexDirection: 'column',
        justifyContent: 'center',
    },
    item: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    itemLink: {
        px: 4,
        py: 6,

        _hover: {
            color: 'primary',
            boxShadow: `-4px 0 0 inset ${tColor('mirage.100')}`,
        },
        '.active &': {
            color: 'primary',
            boxShadow: `-4px 0 0 inset ${tColor('primary')}`,
        },
    },
});

const Nav: StyleMulti = {
    parts: [ 'wrapper', 'group', 'item', 'itemLink' ],
    baseStyle,
    variants: {
        H: varHorizontal,
        V: varVertical,
    },
    defaultProps: {
        variant: 'V',
    },
};

export default Nav;
