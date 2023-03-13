import { useTranslation } from 'react-i18next';

import { asset } from '@/utils/general';

import { Image } from '@chakra-ui/react';
import { Nav as _Nav, NavGroup, NavItem, NavLink } from '@/components/layout/nav';

import { BrainIcon, FingerprintIcon, GithubIcon, HomeIcon, InfoIcon, MessageIcon, WalletIcon } from '@/components/icons';

export function NavHorizontal() {
    const { t } = useTranslation();

    return (
        <_Nav variant="H">
            <NavGroup px={4} variant="H">
                <NavGroup flex="1 0" variant="H">
                    <NavItem id="logo" label={t('app.name')} variant="H">
                        <NavLink to="/" variant="H">
                            <Image
                                srcSet={`${asset('/img/logo_white-sm.png')} 200w, ${asset('/img/logo_white-lg.png')} 600w`}
                                src={asset('/img/logo_white-lg.png')}
                                loading="eager"
                                w={{ base: 24, md: 28 }}
                            />
                        </NavLink>
                    </NavItem>
                </NavGroup>

                <NavGroup flex="0 0" variant="H">
                    <NavItem id="info" label={t('info.navTitle')} variant="H">
                        <NavLink to="/info" isSlim variant="H">
                            <InfoIcon boxSize={7} />
                        </NavLink>
                    </NavItem>

                    <NavItem id="about-us" label={t('aboutUs.navTitle')} variant="H">
                        <NavLink to="/about-us" isSlim variant="H">
                            <MessageIcon boxSize={6} />
                        </NavLink>
                    </NavItem>

                    <NavItem id="github" label={t('github.navTitle')} variant="H">
                        <NavLink to="https://github.com/defiableproject/Create-Paper-Wallet" isExternal isSlim variant="H">
                            <GithubIcon boxSize={8} />
                        </NavLink>
                    </NavItem>
                </NavGroup>
            </NavGroup>

            <NavGroup bgColor="white" justifyContent="center" overflowX="auto" variant="H">
                <NavItem id="home" label="Home" variant="H">
                    <NavLink to="/" variant="H">
                        <HomeIcon boxSize={9} />
                    </NavLink>
                </NavItem>

                <NavItem id="simple" label={t('walletSimple.navTitle')} variant="H">
                    <NavLink to="/wallet/simple" variant="H">
                        <WalletIcon boxSize={7} />
                    </NavLink>
                </NavItem>

                <NavItem id="advanced" label={t('walletAdvanced.navTitle')} variant="H">
                    <NavLink to="/wallet/advanced" variant="H">
                        <BrainIcon boxSize={8} />
                    </NavLink>
                </NavItem>

                <NavItem id="vanity" label={t('vanity.navTitle')} variant="H">
                    <NavLink to="/vanity" variant="H">
                        <FingerprintIcon boxSize={8} />
                    </NavLink>
                </NavItem>
            </NavGroup>
        </_Nav>
    );
}
