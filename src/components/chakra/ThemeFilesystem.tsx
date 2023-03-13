import { PropsWithChildren } from 'react';

import { theme } from '@/theme';

import { ChakraProvider } from '@chakra-ui/react';

const ColorModeManager = {
    type: 'localStorage',
    ssr: true,
    get: () => 'dark' as const,
    set: () => { return; },
} as const;

export default function ThemeFilesystem(Props: PropsWithChildren) {
    return <ChakraProvider {...Props} theme={theme} colorModeManager={ColorModeManager} />;
}
