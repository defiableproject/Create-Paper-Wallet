import { network_A } from '@/state/walletSimple';

import { xxl } from '@/utils/chakra';

import type { CenterProps } from '@chakra-ui/react';
import { Center, Flex } from '@chakra-ui/react';

import { ConnectionIndicator, NetworkField } from '@/features/common';
import { NetworkLogo, QuantityField } from '@/features/walletSimple/config';
import { CancelButton, GenerateButton } from '@/features/walletSimple/controls';

export function ConfigForm(Props: CenterProps) {
    const styles: CenterProps = {
        flexDirection: 'column',
        mx: 'auto',
        w: { base: '100%', md: '80%', lg: '70%', xl: '60%', [xxl]: '50%' },
    };

    return (
        <Center {...styles} {...Props}>
            <NetworkLogo />
            <NetworkField networkAtom={network_A} mt={6} />

            <QuantityField mt={6} />

            <Flex
                direction={{ base: 'column', lg: 'row' }}
                justify="space-between"
                gap={6}
                mt={6}
                w="full"
            >
                <ConnectionIndicator />

                <Flex gap={6} direction={{ base: 'column', lg: 'row' }}>
                    <GenerateButton />
                    <CancelButton />
                </Flex>
            </Flex>
        </Center>
    );
}
