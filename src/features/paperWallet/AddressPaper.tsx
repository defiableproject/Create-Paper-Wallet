import { memo } from 'react';

import { asset } from '@/utils/general';

import type { BoxProps } from '@chakra-ui/react';
import { Box, Divider, Flex, Image, Text } from '@chakra-ui/react';

import { AddressPaperBg, AddressPaperQR } from '@/features/paperWallet';

interface Props extends BoxProps {
    action: string;
    title: string;
    value: string;
}

export const AddressPaper = memo(function AddressPaper(Props: Props) {
    const { children, action, title, value, ...props } = Props;

    const boxStyles: BoxProps = {
        h: '40em',
        mr: '-0.5em',
        pos: 'relative',
        p: '3.5em 1.15em 4em 0',
        w: '22em',
    };

    return (
        <Box {...boxStyles} {...props}>
            <AddressPaperBg position="absolute" left={0} top={0} zIndex={0} />

            <Flex position="relative" direction="column" align="center" wrap="nowrap">
                <Image src={asset('/img/logo-lg.png')} w="10em" />

                <AddressPaperQR size="12em" p="0.75em" value={value} my="0.75em" />

                <Text fontSize="1.5em" fontWeight="light" color="black" lineHeight="none" mb="1em">
                    {action}
                </Text>

                <Divider borderBottom="3px dashed" borderBottomColor="primary" w="15em" />

                <Text fontSize="1.5em" fontWeight="semibold" color="black" lineHeight="none" my="1em">
                    {title}
                </Text>

                <Text fontSize="0.875em" fontWeight="medium" color="black" lineHeight="base" w="14em">
                    {value}
                </Text>
            </Flex>
        </Box>
    );
});
