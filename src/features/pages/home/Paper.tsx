import { forwardRef, ReactNode } from 'react';

import type { BoxProps, FlexProps } from '@chakra-ui/react';
import { Box, Flex, Icon } from '@chakra-ui/react';

import { PaperLink, PaperText, PaperTitle } from '@/features/pages/home';

type Ref = HTMLDivElement
type Props = Omit<BoxProps, 'title'> & {
    icon: typeof Icon;
    title: ReactNode;
    to: string;
}

export const Paper = forwardRef<Ref, Props>(function Paper(Props, ref) {
    const { icon: Icon, title, to, children, ...props } = Props;

    const styles: FlexProps = {
        background: 'mirage.700',
        borderColor: 'mirage.600',

        borderWidth: '2px',
        borderRadius: 'xl',
        flex: '1 0',
        flexBasis: { base: '100%', xl: '30%' },
        flexDir: 'column',
        justifyContent: 'space-between',
        p: 8,
        py: 20,
        textAlign: 'center',

        transitionDuration: 'fast',
        transitionProperty: 'all',
        transitionTimingFunction: 'ease',

        _hover: {
            background: 'mirage.800',
            borderColor: 'mirage.700',

            transform: 'scale(1.05)',
        },
    };

    return (
        <Flex {...styles} {...props} ref={ref}>
            <Box>
                <Icon boxSize={16} color="primary" />

                <PaperTitle mt={6}>{title}</PaperTitle>
                <PaperText mt={12}>{children}</PaperText>
            </Box>

            <Flex mt={24} justifyContent="center">
                <PaperLink to={to} />
            </Flex>
        </Flex>
    );
});
