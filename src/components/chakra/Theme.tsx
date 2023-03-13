import { PropsWithChildren } from 'react';

import { theme } from '@/theme';

import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';

export default function Theme(Props: PropsWithChildren) {
    const { initialColorMode } = theme.config;

    return (<>
        <ColorModeScript initialColorMode={initialColorMode} />

        <ChakraProvider {...Props} theme={theme} />
    </>);
}
