import { memo } from 'react';
import { useAtomValue } from 'jotai/react';

import { result_A } from '@/state/vanity';

import type { FlexProps } from '@chakra-ui/react';

import { PaperDetails } from '@/features/paperWallet';

export const VanityPaperDetails = memo(function VanityPaperDetails(Props: FlexProps) {
    const { address, privateKey } = useAtomValue(result_A)!;

    return <PaperDetails privateKey={privateKey} address={address} {...Props} />;
});
