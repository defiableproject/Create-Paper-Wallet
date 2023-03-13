import { useTranslation } from 'react-i18next';

import { asset } from '@/utils/general';
import { xxl } from '@/utils/chakra';

import { Image } from '@chakra-ui/react';
import { Nav as _Nav, NavGroup, NavItem, NavLink } from '@/components/layout/nav';

import { BrainIcon, FingerprintIcon, GithubIcon, HomeIcon, InfoIcon, MessageIcon, WalletIcon } from '@/components/icons';

export function NavVertical() {
    const { t } = useTranslation();

    return (
        <_Nav>
            <NavItem id="logo" label={t('app.name')} w={{ lg: 28, xl: 32, [xxl]: 36 }}>
                <NavLink to="/">
                    <Image
                        srcSet={`${asset('/img/logo-sm.png')} 200w, ${asset('/img/logo-lg.png')} 600w`}
                        src={asset('/img/logo-lg.png')}
                        loading="eager"
                        w="full"
                    />
                </NavLink>
            </NavItem>

            <NavGroup flexGrow={1} justifyContent="space-between" mt={12} overflowY="auto">
                <NavGroup>
                    <NavItem id="home" label="Home">
                        <NavLink to="/">
                            <HomeIcon boxSize={9} />
                        </NavLink>
                    </NavItem>

                    <NavItem id="simple" label={t('walletSimple.navTitle')}>
                        <NavLink to="/wallet/simple">
                            <WalletIcon boxSize={7} />
                        </NavLink>
                    </NavItem>

                    <NavItem id="advanced" label={t('walletAdvanced.navTitle')}>
                        <NavLink to="/wallet/advanced">
                            <BrainIcon boxSize={8} />
                        </NavLink>
                    </NavItem>

                    <NavItem id="vanity" label={t('vanity.navTitle')}>
                        <NavLink to="/vanity">
                            <FingerprintIcon boxSize={8} />
                        </NavLink>
                    </NavItem>
                </NavGroup>

                <NavGroup>
                    <NavItem id="info" label={t('info.navTitle')}>
                        <NavLink to="/info">
                            <InfoIcon boxSize={8} />
                        </NavLink>
                    </NavItem>

                    <NavItem id="about-us" label={t('aboutUs.navTitle')}>
                        <NavLink to="/about-us">
                            <MessageIcon boxSize={7} />
                        </NavLink>
                    </NavItem>

                    <NavItem id="github" label={t('github.navTitle')}>
                        <NavLink to="https://github.com/defiableproject/Create-Paper-Wallet" isExternal>
                            <GithubIcon boxSize={8} />
                        </NavLink>
                    </NavItem>
                </NavGroup>
            </NavGroup>
        </_Nav>
    );
}
