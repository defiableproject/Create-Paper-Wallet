import { Trans, useTranslation } from 'react-i18next';
import { useAtomValue } from 'jotai/react';

import { paper_A } from '@/state/vanity';

import { useActiveNavSet } from '@/hooks/page';
import { xxl } from '@/utils/chakra';

import { Box, Flex, Text } from '@chakra-ui/react';
import { When } from 'react-if';
import { SubTitle, Title, Wrapper } from '@/components/layout';
import { ShieldIcon } from '@/components/icons';

import { Helmet } from '@/features/app';
import { VanityForm } from '@/features/vanity';
import { VanityPaperDetails } from '@/features/paperWallet';

export default function Vanity() {
    const { t } = useTranslation();

    const { visible } = useAtomValue(paper_A);

    useActiveNavSet('vanity');

    return (
        <Wrapper>
            <Helmet title="vanity.meta.title" description="vanity.meta.description" />

            <Title>
                {t('vanity.title')}
            </Title>

            <Flex
                direction={{ base: 'column', [xxl]: 'row' }}
                gap={{ base: 12, [xxl]: 4 }}
                w="full"
            >
                <Box id="VanityConfig" w="full">
                    <Box float="right" pl={{ base: 4, md: 6 }} py={{ base: 2, md: 4 }}>
                        <ShieldIcon boxSize={{ base: 20, md: 24 }} />
                    </Box>

                    <SubTitle color="primary">
                        {t('vanity.description.title')}
                    </SubTitle>

                    <Text align="justify">
                        <Trans i18nKey="vanity.description.text" components={[ <b key={0} /> ]} />
                    </Text>

                    <VanityForm mt={16} />
                </Box>

                <When condition={visible}>
                    <VanityPaperDetails alignSelf="center" />
                </When>
            </Flex>
        </Wrapper>
    );
}
