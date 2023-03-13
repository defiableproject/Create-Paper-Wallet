import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAtomValue } from 'jotai/react';

import { paper_A, result_A } from '@/state/walletSimple';
import { resetPaper, showPaper } from '@/state/walletSimple/paper';

import { useActiveNavSet } from '@/hooks/page';
import { xxl } from '@/utils/chakra';

import type { GridProps } from '@chakra-ui/react';
import { Flex } from '@chakra-ui/react';
import { When } from 'react-if';
import { Title, Wrapper } from '@/components/layout';

import { AddressDetails } from '@/features/addresses';
import { WalletPaperDetails } from '@/features/paperWallet';

export default function Addresses() {
    const navigate = useNavigate();
    const { t } = useTranslation();

    const result = useAtomValue(result_A);
    const { visible: paperVisible } = useAtomValue(paper_A);

    useActiveNavSet('simple');

    useEffect(() => {
        return resetPaper;
    }, []);

    useEffect(() => {
        result.length || navigate('/wallet/simple');
    }, [ result, navigate ]);

    const addressStyles: GridProps = !paperVisible ? {} : {
        maxHeight: { [xxl]: '78vh' },
        overflowY: { [xxl]: 'auto' },
        pr: { [xxl]: 2 },
    };

    return (
        <Wrapper>
            <Title>
                {t('walletSimple.addresses.title')}
            </Title>

            <Flex
                direction={{ base: 'column', [xxl]: 'row' }}
                gap={{ base: 12, [xxl]: 4 }}
                w="full"
            >
                <AddressDetails
                    resultAtom={result_A}
                    paperHandler={showPaper}
                    {...addressStyles}
                />

                <When condition={paperVisible}>
                    <WalletPaperDetails
                        resultAtom={result_A}
                        paperAtom={paper_A}
                    />
                </When>
            </Flex>
        </Wrapper>
    );
}
