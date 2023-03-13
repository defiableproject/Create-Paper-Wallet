import { memo, useMemo } from 'react';

import type { PrimitiveAtom } from 'jotai/vanilla';
import { useAtomValue } from 'jotai/react';

import type { WalletPaper as SimplePaper, WalletResult as SimpleResult } from '@/types/walletSimple';
import type { WalletPaper as AdvancedPaper, WalletResult as AdvancedResult } from '@/types/walletAdvanced';

import type { FlexProps } from '@chakra-ui/react';

import { PaperDetails } from '@/features/paperWallet';

interface Props extends FlexProps {
    resultAtom: PrimitiveAtom<SimpleResult> | PrimitiveAtom<AdvancedResult>;
    paperAtom: PrimitiveAtom<SimplePaper> | PrimitiveAtom<AdvancedPaper>;
}

export const WalletPaperDetails = memo(function WalletPaperDetails(Props: Props) {
    const { resultAtom, paperAtom, ...props } = Props;

    const result = useAtomValue(resultAtom);
    const { index } = useAtomValue(paperAtom);
    const { address, privateKey } = useMemo(() => result[index!], [ result, index ]);

    return <PaperDetails privateKey={privateKey} address={address} {...props} />;
});
