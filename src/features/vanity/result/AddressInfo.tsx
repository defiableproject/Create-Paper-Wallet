import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useAtomValue } from 'jotai/react';

import { paper_A, result_A } from '@/state/vanity';
import { togglePaper } from '@/state/vanity/paper';

import type { FlexProps } from '@chakra-ui/react';
import { Flex, VStack } from '@chakra-ui/react';
import { SubTitle } from '@/components/layout';

import { QrButton } from '@/features/common';
import { AddressInfoField } from '@/features/addresses';

export const AddressInfo = memo(function AddressInfo(Props: FlexProps) {
    const { t } = useTranslation();

    const { privateKey, address } = useAtomValue(result_A)!;
    const { index } = useAtomValue(paper_A);

    const handlePrint = useCallback(() => togglePaper(), []);

    return (
        <Flex direction="column" w="full" {...Props}>
            <Flex align="center" mb={4}>
                <QrButton onClick={handlePrint} mr={4} />

                <SubTitle color="primary" fontSize="2xl" fontWeight="bold" mb={0}>
                    {index}.
                </SubTitle>
            </Flex>

            <VStack spacing={4}>
                <AddressInfoField label={t('addresses.address')} value={address} />
                <AddressInfoField label={t('addresses.privateKey')} value={privateKey} />
            </VStack>
        </Flex>
    );
});
