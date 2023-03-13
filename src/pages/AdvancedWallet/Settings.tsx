import { useTranslation } from 'react-i18next';
import { useAtomValue } from 'jotai/react';

import { config_A } from '@/state/walletAdvanced';

import { useActiveNavSet } from '@/hooks/page';

import { Accordion, Flex } from '@chakra-ui/react';
import { Title, Wrapper } from '@/components/layout';

import { BIP39Form } from '@/features/walletAdvanced/bip39';
import { SettingsItem } from '@/features/pages/wallet/settings';
import { MasterKeyForm } from '@/features/walletAdvanced/masterKey';
import { BIP85Form } from '@/features/walletAdvanced/bip85';
import { DerivationForm } from '@/features/walletAdvanced/derivation';
import { AddressesForm } from '@/features/walletAdvanced/addresses';
import { CancelButton, GenerateButton } from '@/features/walletAdvanced/controls';

const getDisplay = (condition: boolean) => ({ display: condition ? undefined : 'none' });

export default function Settings() {
    const { t } = useTranslation();

    const advanced = useAtomValue(config_A);
    const { bip39, masterKey, bip85, derivation, addresses } = advanced;

    useActiveNavSet('advanced');

    return (
        <Wrapper>
            <Title>
                {t('walletAdvanced.settings.title')}
            </Title>

            <Flex flexDirection="column">
                <Accordion allowToggle defaultIndex={0}>
                    <SettingsItem label={t('walletAdvanced.options.bip39')} {...getDisplay(bip39)}>
                        <BIP39Form />
                    </SettingsItem>

                    <SettingsItem label={t('walletAdvanced.options.masterKey')} {...getDisplay(masterKey)}>
                        <MasterKeyForm />
                    </SettingsItem>

                    <SettingsItem label={t('walletAdvanced.options.bip85')} {...getDisplay(bip85)}>
                        <BIP85Form />
                    </SettingsItem>

                    <SettingsItem label={t('walletAdvanced.options.derivation')} {...getDisplay(derivation)}>
                        <DerivationForm />
                    </SettingsItem>

                    <SettingsItem label={t('walletAdvanced.options.addresses')} {...getDisplay(addresses)}>
                        <AddressesForm />
                    </SettingsItem>
                </Accordion>

                <Flex justify="flex-end" gap={6} direction={{ base: 'column', lg: 'row' }} mt={8}>
                    <GenerateButton />
                    <CancelButton />
                </Flex>
            </Flex>
        </Wrapper>
    );
}
