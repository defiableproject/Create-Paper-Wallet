import { useCallback, useEffect, useState } from 'react';
import { useAtomValue } from 'jotai/react';

import { network_A } from '@/state/walletSimple';

import { asset } from '@/utils/general';

import type { ImageProps } from '@chakra-ui/react';
import { Center, Circle, Image } from '@chakra-ui/react';

export function NetworkLogo() {
    const network = useAtomValue(network_A);
    const [ alias, setAlias ] = useState(network.alias);

    useEffect(() => setAlias(network.alias), [ network ]);

    const handleError = useCallback(() => setAlias('bitcoin'), [ setAlias ]);

    const rhombusPng = asset('/img/rhombus.png');
    const networkPng = asset(`/img/networks/${alias}.png`);

    const circleStyles: ImageProps = {
        bgColor: 'white',

        borderRadius: 'full',
        boxSize: 24,
        p: 3,
        zIndex: 1,
    };

    return (
        <Center pos="relative" boxSize={52}>
            <Image src={rhombusPng} pos="absolute" boxSize="full" />

            <Circle {...circleStyles}>
                <Image src={networkPng} onError={handleError} w="full" />
            </Circle>
        </Center>
    );
}
