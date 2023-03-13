import { Trans, useTranslation } from 'react-i18next';

import { useActiveNavSet } from '@/hooks/page';
import { asset } from '@/utils/general';

import { Box, Flex, Image, Text } from '@chakra-ui/react';
import { Title, Wrapper } from '@/components/layout';

import { Helmet } from '@/features/app';

export default function Info() {
    const { t } = useTranslation();

    useActiveNavSet('info');

    return (
        <Wrapper>
            <Helmet title="info.meta.title" description="info.meta.description" />

            <Title>
                {t('info.title')}
            </Title>

            <Flex
                gap={16}
                direction={{ base: 'column', xl: 'row' }}
                alignItems={{ base: 'center', xl: '' }}
                w="full"
            >
                <Box>
                    <Text align="justify">
                        <Trans i18nKey="info.description" />
                    </Text>
                </Box>

                <Box flexShrink={0} w={92}>
                    <Image src={asset('/img/globe.svg')} loading="eager" w={92} />
                </Box>
            </Flex>
        </Wrapper>
    );
}
