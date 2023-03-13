import { network_A } from '@/state/walletAdvanced';

import type { StackProps } from '@chakra-ui/react';
import { VStack } from '@chakra-ui/react';

import { NetworkField } from '@/features/common';
import { SeedField } from '@/features/walletAdvanced/bip39';
import { MasterPrivateKeyField } from '@/features/walletAdvanced/masterKey';

export function MasterKeyForm(Props: StackProps) {
    return (
        <VStack spacing={6} w="full" {...Props}>
            <SeedField isRequired />
            <NetworkField networkAtom={network_A} />

            <MasterPrivateKeyField />
        </VStack>
    );
}
