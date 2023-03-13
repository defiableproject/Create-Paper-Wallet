import { memo } from 'react';
import { useAtomValue } from 'jotai/react';

import { result_A } from '@/state/vanity';

import type { FlexProps } from '@chakra-ui/react';

import { AddressInfo } from '@/features/vanity/result';

export const AddressDetails = memo(function AddressDetails(Props: FlexProps) {
    const result = useAtomValue(result_A);

    if (!result) {
        return null;
    }

    return <AddressInfo {...Props} />;
});
