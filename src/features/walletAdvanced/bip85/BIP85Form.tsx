import type { StackProps } from '@chakra-ui/react';
import { VStack } from '@chakra-ui/react';

import { MasterPrivateKeyField } from '@/features/walletAdvanced/masterKey';
import { ApplicationField, ChildKeyField, IndexField } from '@/features/walletAdvanced/bip85';
import { BIP39Details } from '@/features/walletAdvanced/bip85/bip39';
import { HexDetails } from '@/features/walletAdvanced/bip85/hex';

export function BIP85Form(Props: StackProps) {

    return (
        <VStack spacing={6} w="full" {...Props}>
            <MasterPrivateKeyField />

            <ApplicationField />
            <IndexField />

            <BIP39Details />
            <HexDetails />

            <ChildKeyField />
        </VStack>
    );
}
