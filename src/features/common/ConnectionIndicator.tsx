import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import type { FlexProps } from '@chakra-ui/react';
import { chakra, Circle, Flex, Text } from '@chakra-ui/react';

type Props = FlexProps

export const ConnectionIndicator = memo(function ConnectionIndicator(Props: Props) {
    const { t } = useTranslation();

    const isOnline = navigator.onLine;

    const color = t(isOnline ? 'connection.online.color' : 'connection.offline.color');
    const text = t(isOnline ? 'connection.online.text' : 'connection.offline.text');

    return (
        <Flex {...Props} align="center">
            <chakra.b>
                {t('connection.label')}:
            </chakra.b>

            <Circle size={3} bgColor={color} mx={4} />

            <Text>{text}</Text>
        </Flex>
    );
});
