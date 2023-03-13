import type { StackProps } from '@chakra-ui/react';
import { VStack } from '@chakra-ui/react';

import { LanguageField, PassphraseField, SeedField, WordsField } from '@/features/walletAdvanced/bip39';

export function BIP39Form(Props: StackProps) {
    return (
        <VStack spacing={6} w="full" {...Props}>
            <LanguageField />
            <WordsField />
            <PassphraseField />

            <SeedField />
        </VStack>
    );
}
