import { forwardRef } from 'react';

import type { FlexProps } from '@chakra-ui/react';
import { Flex, useMultiStyleConfig } from '@chakra-ui/react';

type Ref = HTMLDivElement
type Props = NavGroupProps

export interface NavGroupProps extends FlexProps {
    variant?: 'H' | 'V';
}

export const NavGroup = forwardRef<Ref, Props>(function NavGroup(Props, ref) {
    const { variant, ...props } = Props;

    const { group } = useMultiStyleConfig('Nav', { variant });

    return <Flex __css={group} {...props} ref={ref} />;
});
