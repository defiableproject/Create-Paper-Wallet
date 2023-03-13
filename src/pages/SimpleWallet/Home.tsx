import { Trans, useTranslation } from 'react-i18next';

import { useActiveNavSet } from '@/hooks/page';
import { xxl } from '@/utils/chakra';

import { Box, Text } from '@chakra-ui/react';
import { Title, Wrapper } from '@/components/layout';
import { ShieldIcon } from '@/components/icons';

import { Helmet } from '@/features/app';
import { ConfigForm } from '@/features/walletSimple/config';

export default function Home() {
    const { t } = useTranslation();

    useActiveNavSet('simple');

    return (
        <Wrapper>
            <Helmet title="walletSimple.meta.title" description="walletSimple.meta.description" />

            <Title>
                {t('walletSimple.title')}
            </Title>

            <Box>
                <Box
                    float="right"
                    pl={{ base: 4, md: 6 }}
                    py={{ base: 2, md: 4 }}
                >
                    <ShieldIcon boxSize={{ base: 20, md: 24 }} />
                </Box>

                <Text align="justify">
                    <Trans i18nKey="walletSimple.description" components={[ <b key={0} /> ]} />
                </Text>
            </Box>

            <ConfigForm mt={12} />

            <Text
                color="primary"
                align="center"
                fontSize="sm"
                lineHeight="tall"
                mx="auto"
                mt={12}
                w={{ base: '100%', xl: '80%', [xxl]: '70%' }}
            >
                <Trans i18nKey="walletSimple.warning" components={[ <b key={0} /> ]} />
            </Text>
        </Wrapper>
    );
}
