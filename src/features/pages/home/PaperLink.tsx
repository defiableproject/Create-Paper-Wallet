import { useTranslation } from 'react-i18next';

import type { LinkProps } from '@chakra-ui/react';
import { RouteLink, RouteLinkProps } from '@/components/chakra';

export function PaperLink(Props: RouteLinkProps) {
    const { t } = useTranslation();

    const styles: LinkProps = {
        borderColor: 'primary',
        color: 'white',

        borderRadius: 'lg',
        borderWidth: '2px',
        fontSize: 'sm',
        fontWeight: 'medium',
        letterSpacing: '0.5px',
        py: 3,
        px: 7,

        _hover: {
            backgroundColor: 'mirage.700',

            textDecoration: 'none',
        },
        _active: {
            backgroundColor: 'mirage.600',
        },
    };

    return (
        <RouteLink {...styles as object} {...Props}>
            {t('home.startNow')}
        </RouteLink>
    );
}
