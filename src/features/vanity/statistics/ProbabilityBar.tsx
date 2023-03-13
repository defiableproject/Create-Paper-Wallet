import { memo } from 'react';
import { useAtomValue } from 'jotai/react';

import { statistics_A } from '@/state/vanity';

import { useDifficulty } from '@/hooks/vanity/useDifficulty';
import { calcProbabilityPercentage } from '@/utils/vanity/statistics';

import type { ProgressProps } from '@chakra-ui/react';
import { Progress, ProgressLabel } from '@chakra-ui/react';

export const ProbabilityBar = memo(function ProbabilityBar(Props: ProgressProps) {
    const { generated } = useAtomValue(statistics_A);

    const difficulty = useDifficulty();
    const percentage = calcProbabilityPercentage(difficulty, generated);

    return (
        <Progress value={percentage} {...Props} h={6} borderRadius="md">
            <ProgressLabel fontSize="sm">{percentage}%</ProgressLabel>
        </Progress>
    );
});
