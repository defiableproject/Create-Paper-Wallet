import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { useProbability50 } from '@/hooks/vanity';
import { formatNum } from '@/utils/vanity/statistics';

export function useAddresses50() {
    const { t } = useTranslation();

    const probability50 = useProbability50();

    return useMemo(() => {
        if (probability50 === -Infinity) {
            return t('vanity.statistics.addresses50.impossible');
        }

        const count = probability50;
        const addr = formatNum(probability50);

        return t('vanity.statistics.addresses50', { count, addr });
    }, [ probability50, t ]);
}
