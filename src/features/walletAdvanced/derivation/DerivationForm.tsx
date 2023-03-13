import type { StackProps } from '@chakra-ui/react';
import { VStack } from '@chakra-ui/react';

import { ExtendedPrivateKeyField, ExtendedPublicKeyField, PathField } from '@/features/walletAdvanced/derivation';

export function DerivationForm(Props: StackProps) {
    return (
        <VStack spacing={6} w="full" {...Props}>
            <PathField />

            <ExtendedPrivateKeyField />
            <ExtendedPublicKeyField />
        </VStack>
    );
}
