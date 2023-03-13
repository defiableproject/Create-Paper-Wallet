import { forwardRef } from 'react';

import type { FlexProps } from '@chakra-ui/react';
import { Flex, useMultiStyleConfig } from '@chakra-ui/react';

type Ref = HTMLDivElement
type Props = NavProps

export interface NavProps extends FlexProps {
    variant?: 'H' | 'V';
}

export const Nav = forwardRef<Ref, Props>(function Nav(Props, ref) {
    const { variant, ...props } = Props;

    const { wrapper } = useMultiStyleConfig('Nav', { variant });

    return <Flex __css={wrapper} {...props} id="Nav" ref={ref} />;
});
