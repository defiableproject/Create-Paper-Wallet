import { useMemo } from 'react';

import { useDifficulty } from '@/hooks/vanity';
import { calcProbability50 } from '@/utils/vanity/statistics';

export function useProbability50() {
    const difficulty = useDifficulty();

    return useMemo(() => calcProbability50(difficulty), [ difficulty ]);
}
