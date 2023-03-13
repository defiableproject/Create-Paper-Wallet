import { Trans, useTranslation } from 'react-i18next';

import { useActiveNavSet } from '@/hooks/page';
import { asset } from '@/utils/general';

import { Box, Center, Flex, Image, Link, Text } from '@chakra-ui/react';
import { Title, Wrapper } from '@/components/layout';

import { Helmet } from '@/features/app';

export default function AboutUs() {
    const { t } = useTranslation();

    useActiveNavSet('about-us');

    return (
        <Wrapper as={Center} flexDirection="column">
            <Helmet title="aboutUs.meta.title" description="aboutUs.meta.description" />

            <Flex
                gap={16}
                direction={{ base: 'column', xl: 'row' }}
                alignItems={{ base: 'center', xl: '' }}
                w="full"
            >
                <Box>
                    <Title>
                        {t('aboutUs.title')}
                    </Title>

                    <Text align="justify">
                        <Trans
                            i18nKey="aboutUs.description"
                            components={[
                                <b key={0} />,
                                <Link href="https://defiableproject.com/" isExternal key={1} />,
                                <b key={2} />,
                            ]}
                        />
                    </Text>
                </Box>

                <Box flexShrink={0} w={116}>
                    <Image src={asset('/img/megaphone.svg')} loading="eager" w={116} />
                </Box>
            </Flex>
        </Wrapper>
    );
}
