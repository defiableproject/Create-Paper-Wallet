import type { StackProps } from '@chakra-ui/react';
import { VStack } from '@chakra-ui/react';

import { HardenedField, QuantityField, StartingIndexField } from '@/features/walletAdvanced/addresses/index';

export function AddressesForm(Props: StackProps) {
    return (
        <VStack spacing={6} w="full" {...Props}>
            <QuantityField />
            <StartingIndexField />
            <HardenedField />
        </VStack>
    );
}
