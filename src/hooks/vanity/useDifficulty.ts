import { useMemo } from 'react';
import { useAtomValue } from 'jotai/react';

import { config_A } from '@/state/vanity';

import { calcDifficulty } from '@/utils/vanity/statistics';

export function useDifficulty() {
    const { value, caseSensitive } = useAtomValue(config_A);

    return useMemo(() => calcDifficulty(value, caseSensitive), [ value, caseSensitive ]);
}
