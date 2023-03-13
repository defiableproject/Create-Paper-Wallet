import { memo, useEffect } from 'react';
import { useAtomValue } from 'jotai/react';

import { config_A, network_A } from '@/state/vanity';
import { clearStatistics } from '@/state/vanity/statistics';

import type { FlexProps } from '@chakra-ui/react';
import { Flex } from '@chakra-ui/react';

import { ProbabilityBar, StatsList } from '@/features/vanity/statistics';

export const StatisticsDetails = memo(function StatisticsDetails(Props: FlexProps) {
    const network = useAtomValue(network_A);
    const config = useAtomValue(config_A);

    useEffect(clearStatistics, [ network, config ]);

    return (
        <Flex {...Props} direction="column">
            <StatsList />

            <ProbabilityBar />
        </Flex>
    );
});
