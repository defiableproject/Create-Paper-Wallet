import { useTranslation } from 'react-i18next';
import { useAtomValue } from 'jotai/react';
import humanizeDuration from 'humanize-duration';

import { statistics_A } from '@/state/vanity';

import { useProbability50 } from '@/hooks/vanity';
import { calcSpeed } from '@/utils/vanity/statistics';

export function useTime50() {
    const { t, i18n } = useTranslation();

    const { generated, firstTick } = useAtomValue(statistics_A);
    const probability50 = useProbability50();

    const speed = calcSpeed(generated, firstTick);

    const language = i18n.language.substring(0, 2);
    const seconds = probability50 / speed;

    if (seconds > 200 * 365.25 * 24 * 3600 || seconds === -Infinity) {
        return t('vanity.statistics.time50.thousandsOfYears');
    }

    return humanizeDuration(Math.round(seconds) * 1000, { language, largest: 2 });
}
