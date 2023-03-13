import { memo } from 'react';

import type { StackProps } from '@chakra-ui/react';
import { Flex, VStack } from '@chakra-ui/react';

import { CasingField, ModeField, ThreadsField } from '@/features/vanity/config';
import { StartButton, StopButton } from '@/features/vanity/controls';

export const ConfigDetails = memo(function ConfigDetails(Props: StackProps) {
    return (
        <VStack spacing={6} {...Props} w={{ base: '100%', lg: '50%' }}>
            <Flex w="full" wrap="wrap">
                <CasingField w="50%" />
                <ModeField w="50%" />
            </Flex>

            <ThreadsField />

            <Flex w="full" gap={6} direction={{ base: 'column', lg: 'row' }}>
                <StartButton />
                <StopButton />
            </Flex>
        </VStack>
    );
});
