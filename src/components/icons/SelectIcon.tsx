import { createIcon } from '@chakra-ui/react';

export const SelectIcon = createIcon({
    displayName: 'SelectIcon',
    viewBox: '0 0 32 32',
    path: (<>
        <g id="background">
            <rect fill="none" height="32" width="32" />
        </g>
        <g id="text">
            <polygon points="4,6 4,10 12,10 12,28 16,28 16,10 24,10 24,6" />
            <polygon points="30,4 30,2 24,2 24,4 26,4 26,28 24,28 24,30 30,30 30,28 28,28 28,4" />
        </g>
    </>),
    defaultProps: {
        fill: 'currentColor',
    },
});
