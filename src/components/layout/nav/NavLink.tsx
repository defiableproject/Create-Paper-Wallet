import { forwardRef } from 'react';

import type { LinkProps } from '@chakra-ui/react';
import { Link, useMultiStyleConfig } from '@chakra-ui/react';
import { RouteLink } from '@/components/chakra';

type Ref = HTMLAnchorElement
type Props = NavLinkProps

export interface NavLinkProps extends LinkProps {
    variant?: 'H' | 'V';
    to: string;
    isExternal?: boolean;
    isSlim?: boolean;
}

export const NavLink = forwardRef<Ref, Props>(function NavLink(Props, ref) {
    const { variant, isExternal, isSlim, to, ...props } = Props;

    const { itemLink } = useMultiStyleConfig('Nav', { variant });

    if (isSlim) {
        itemLink.px = 4;
    }

    if (isExternal) {
        return <Link href={to} isExternal sx={itemLink} {...props} ref={ref} />;
    }

    return <RouteLink to={to} sx={itemLink} {...props} ref={ref} />;
});
