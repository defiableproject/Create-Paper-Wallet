import { FormEventHandler, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Trans, useTranslation } from 'react-i18next';

import { useActiveNavSet } from '@/hooks/page';
import { xxl } from '@/utils/chakra';

import { Box, Button, Center, chakra, Text } from '@chakra-ui/react';
import { Title, Wrapper } from '@/components/layout';
import { ShieldIcon } from '@/components/icons';

import { Helmet } from '@/features/app';
import { OptionsGroup } from '@/features/walletAdvanced/config';

export default function Home() {
    const navigate = useNavigate();
    const { t } = useTranslation();

    useActiveNavSet('advanced');

    const handleSubmit: FormEventHandler = useCallback(ev => {
        ev.preventDefault();

        navigate('/wallet/advanced/settings');
    }, [ navigate ]);

    return (
        <Wrapper>
            <Helmet title="walletAdvanced.meta.title" description="walletAdvanced.meta.description" />

            <Title>
                {t('walletAdvanced.title')}
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
                    <Trans i18nKey="walletAdvanced.description.text" />
                </Text>
            </Box>

            <chakra.form onSubmit={handleSubmit} mt={8}>
                <Center
                    flexDirection="column"
                    w={{ base: '100%', md: '90%', lg: '80%', xl: '70%', [xxl]: '60%' }}
                    mx="auto"
                >
                    <Text>
                        <Trans i18nKey="walletAdvanced.description.options" />
                    </Text>

                    <OptionsGroup mb={12} mt={8} />

                    <Button type="submit">
                        {t('walletAdvanced.options.customize')}
                    </Button>
                </Center>
            </chakra.form>
        </Wrapper>
    );
}
