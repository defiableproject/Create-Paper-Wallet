import { useTranslation } from 'react-i18next';

import { useActiveNavSet } from '@/hooks/page';

import { Title, Wrapper } from '@/components/layout';
import { Center, Flex } from '@chakra-ui/react';
import { BrainIcon, FingerprintIcon, WalletIcon } from '@/components/icons';

import { Helmet } from '@/features/app';
import { Paper } from '@/features/pages/home';

export default function Home() {
    const { t } = useTranslation();

    useActiveNavSet('home');

    return (
        <Wrapper as={Center}>
            <Helmet title="home.meta.title" description="home.meta.description" />

            <Title display="none">
                {t('app.name')}
            </Title>

            <Flex direction={{ base: 'column', xl: 'row' }} gap={8} w="full">
                <Paper icon={WalletIcon} title={t('walletSimple.title')} to="/wallet/simple">
                    {t('home.simple.description')}
                </Paper>

                <Paper icon={BrainIcon} title={t('walletAdvanced.title')} to="/wallet/advanced">
                    {t('home.advanced.description')}
                </Paper>

                <Paper icon={FingerprintIcon} title={t('vanity.title')} to="/vanity">
                    {t('home.vanity.description')}
                </Paper>
            </Flex>
        </Wrapper>
    );
}
