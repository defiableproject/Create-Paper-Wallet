import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import type { FlexProps } from '@chakra-ui/react';
import { Flex } from '@chakra-ui/react';

import { AddressPaper } from '@/features/paperWallet';

interface Props extends FlexProps {
    privateKey: string;
    address: string;
}

export const PaperDetails = memo(function PaperDetails(Props: Props) {
    const { privateKey, address, ...props } = Props;

    const { t } = useTranslation();

    const styles: FlexProps = {
        alignSelf: 'center',
        fontSize: { base: '0.55rem', md: '0.85rem', xl: '1rem' },
    };

    return (
        <Flex {...styles} {...props} id="PaperDetails">
            <AddressPaper
                action={t('paperWallet.spend')}
                title={t('addresses.privateKey')}
                value={privateKey}
            />

            <AddressPaper
                action={t('paperWallet.loadAndVerify')}
                title={t('addresses.address')}
                value={address}
            />

            <style>{`
                @media print {
                    #Nav,
                    #AddressDetails,
                    #VanityConfig,
                    #Wrapper > h1 {
                        display: none;
                    }

                    #Wrapper {
                        background: white;
                    }

                    #PaperDetails {
                        display: flex;
                        font-size: 1rem;
                    }
                }
            `}</style>
        </Flex>
    );
});
