import type { PrimitiveAtom } from 'jotai/vanilla';
import { useAtomValue } from 'jotai/react';

import type { Address, FullAddress } from '@/libs/addresses';

import type { GridProps } from '@chakra-ui/react';
import { Grid } from '@chakra-ui/react';

import { AddressInfo } from '@/features/addresses/index';

interface Props extends GridProps {
    resultAtom: PrimitiveAtom<Address[]> | PrimitiveAtom<FullAddress[]>;
    paperHandler: (index: number | null) => void;
}

export function AddressDetails(Props: Props) {
    const { resultAtom, paperHandler, ...props } = Props;

    const result = useAtomValue(resultAtom);

    const styles: GridProps = {
        gap: 12,
        templateColumns: { md: `repeat(auto-fill, minmax(32rem, 1fr))` },
        w: 'full',
    };

    return (
        <Grid {...styles} {...props} id="AddressDetails">
            {result.map((v, n) => {
                const { publicKey, ...addressInfo } = v;

                return <AddressInfo key={v.address} n={n} paperHandler={paperHandler} {...addressInfo} />;
            })}
        </Grid>
    );
}
