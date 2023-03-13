import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useAtomValue } from 'jotai/react';

import { statistics_A } from '@/state/vanity';

import { useAddresses50, useDifficulty, useTime50 } from '@/hooks/vanity';
import { calcSpeed, formatNum } from '@/utils/vanity/statistics';

import type { ListProps } from '@chakra-ui/react';
import { chakra, List, ListItem } from '@chakra-ui/react';
import { Mono } from '@/components/chakra';

export const StatsList = memo(function StatsList(Props: ListProps) {
    const { t } = useTranslation();

    const { generated, firstTick } = useAtomValue(statistics_A);

    const difficulty = useDifficulty();
    const addresses50 = useAddresses50();
    const time50 = useTime50();

    const speed = calcSpeed(generated, firstTick);

    return (
        <List spacing={3} mb={5} {...Props}>
            <ListItem>
                <chakra.b mr={4}>{t('vanity.statistics.difficulty')}:</chakra.b>

                <Mono>{formatNum(difficulty)}</Mono>
            </ListItem>

            <ListItem>
                <chakra.b mr={4}>{t('vanity.statistics.generated')}:</chakra.b>

                <Mono>{formatNum(generated)}</Mono>
            </ListItem>

            <ListItem>
                <chakra.b mr={4}>{t('vanity.statistics.probability50')}:</chakra.b>

                {speed ? time50 : addresses50}
            </ListItem>

            <ListItem>
                <chakra.b mr={4}>{t('vanity.statistics.speed')}:</chakra.b>

                {t('vanity.statistics.speed.addressPerSecond', { rate: speed })}
            </ListItem>
        </List>
    );
});
