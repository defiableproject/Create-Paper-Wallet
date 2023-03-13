import type { ThemeOverride } from '@chakra-ui/react';

export default {
    global: {
        'pre, code, kbd, samp': {
            fontFamily: 'mono',
            fontSize: 'sm',
        },

        body: {
            backgroundColor: 'mirage.700',
            overflowY: 'scroll',
        },

        _dark: {
            b: {
                fontWeight: 'medium',
            },
        },
    },
} as ThemeOverride['styles'];
