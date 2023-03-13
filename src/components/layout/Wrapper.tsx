import { forwardRef, useEffect } from 'react';

import colors from '@/theme/foundations/colors';

import type { BoxProps, HTMLChakraProps } from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';

type Ref = HTMLDivElement
type Props = WrapperProps

export interface WrapperProps extends BoxProps {
    noScrollReset?: boolean;
}

const { mirage } = colors;

export const Wrapper = forwardRef<Ref, Props>(function Wrapper(Props, ref) {
    const { noScrollReset, ...props } = Props;

    const styles: HTMLChakraProps<'div'> = {
        background: `linear-gradient(165deg, ${mirage[900]} -15%, ${mirage[700]} 40%, ${mirage[700]} 60%, ${mirage[900]} 115%)`,

        flexGrow: 1,
        pb: 12,
        pt: 16,
        px: { base: 8, md: 16, '2xl': 32 },
        w: 'full',
    };

    useEffect(() => {
        return () => {
            !noScrollReset && scrollTo({ left: 0, top: 0 });
        };
    }, [ noScrollReset ]);

    return <Box {...styles} {...props} id="Wrapper" ref={ref} />;
});
