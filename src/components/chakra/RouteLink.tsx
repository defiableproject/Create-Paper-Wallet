import { forwardRef } from 'react';

import type { LinkProps as RouterLinkProps } from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom';

import type { LinkProps } from '@chakra-ui/react';
import { Link } from '@chakra-ui/react';

type Ref = HTMLAnchorElement
type Props = RouteLinkProps

export type RouteLinkProps = Omit<LinkProps, 'href' | 'isExternal'>
    & Pick<RouterLinkProps, 'reloadDocument' | 'replace' | 'state' | 'preventScrollReset' | 'relative' | 'to'>

export const RouteLink = forwardRef<Ref, Props>(function RouteLink(Props, ref) {
    return <Link as={RouterLink} {...Props} ref={ref} />;
});
