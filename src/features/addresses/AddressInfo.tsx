import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { Flex, FlexProps, VStack } from '@chakra-ui/react';
import { When } from 'react-if';
import { SubTitle } from '@/components/layout';

import { QrButton } from '@/features/common';
import { AddressInfoField } from '@/features/addresses';

interface Props extends FlexProps {
    n: number;
    path?: string;
    address: string;
    privateKey: string;
    paperHandler: (index: number | null) => void;
}

export const AddressInfo = memo(function AddressInfo(Props: Props) {
    const { children, n, path, address, privateKey, paperHandler, ...props } = Props;

    const { t } = useTranslation();

    const handlePrint = useCallback(() => paperHandler(n), [ paperHandler, n ]);

    return (
        <Flex direction="column" w="full" {...props}>
            <Flex align="center" mb={4}>
                <QrButton onClick={handlePrint} mr={4} />

                <SubTitle color="primary" fontSize="2xl" fontWeight="bold" mb={0}>
                    {n + 1}.
                </SubTitle>
            </Flex>

            <VStack spacing={4}>
                <When condition={!!path}>
                    <AddressInfoField label={t('addresses.path')} value={path!} hideButtons />
                </When>

                <AddressInfoField label={t('addresses.address')} value={address} />
                <AddressInfoField label={t('addresses.privateKey')} value={privateKey} />
            </VStack>
        </Flex>
    );
});
