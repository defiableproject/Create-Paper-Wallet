import { forwardRef } from 'react';

import { useNav } from '@/hooks/page';
import { cx } from '@/utils/chakra';

import type { FlexProps, PlacementWithLogical } from '@chakra-ui/react';
import { Flex, Tooltip, useMultiStyleConfig } from '@chakra-ui/react';

type Ref = HTMLDivElement
type Props = NavItemProps

export interface NavItemProps extends FlexProps {
    variant?: 'H' | 'V';
    id: string;
    label: string;
}

export const NavItem = forwardRef<Ref, Props>(function NavItem(Props, ref) {
    const { variant, id, label, children, ...props } = Props;

    const { activeNav } = useNav();
    const { item } = useMultiStyleConfig('Nav', { variant });

    const tooltipPlacement: PlacementWithLogical = variant === 'H' ? 'bottom' : 'right';

    if (id === activeNav) {
        props.className = cx(props.className, 'active');
    }

    return (
        <Flex __css={item} {...props} ref={ref}>
            <Tooltip label={label} placement={tooltipPlacement} shouldWrapChildren>
                {children}
            </Tooltip>
        </Flex>
    );
});
