import { useAtomValue } from 'jotai/react';

import { network_A, status_A } from '@/state/vanity';

import type { BoxProps } from '@chakra-ui/react';
import { Box, Flex } from '@chakra-ui/react';

import { NetworkField } from '@/features/common';
import { ConfigDetails, ValueField } from '@/features/vanity/config';
import { StatisticsDetails } from '@/features/vanity/statistics';
import { AddressDetails } from '@/features/vanity/result';

export function VanityForm(Props: BoxProps) {
    const { running } = useAtomValue(status_A);

    return (<>
        <Box {...Props}>
            <NetworkField networkAtom={network_A} isReadOnly={running} />

            <ValueField mt={6} />

            <Flex gap={12} direction={{ base: 'column', lg: 'row' }} mt={12} w="full">
                <ConfigDetails flex="1 1" />

                <StatisticsDetails flex="1 1" />
            </Flex>
        </Box>

        <AddressDetails mt={12} />
    </>);
}
