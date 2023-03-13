import { memo, MutableRefObject, useRef } from 'react';

import { isCopyAvailable } from '@/utils/general';

import type { FlexProps } from '@chakra-ui/react';
import { chakra, Flex } from '@chakra-ui/react';
import { Unless } from 'react-if';
import { MonoInput } from '@/components/chakra';

import { CopyButton, SelectButton } from '@/features/common';

type InputRef = MutableRefObject<HTMLInputElement | null>

interface Props extends FlexProps {
    label: string;
    value: string;
    hideButtons?: boolean;
}

const CopyOrSelect = isCopyAvailable ? CopyButton : SelectButton;

export const AddressInfoField = memo(function AddressInfoField(Props: Props) {
    const { children, label, value, hideButtons, ...props } = Props;

    const inputRef: InputRef = useRef(null);

    const styles: FlexProps = {
        align: { base: '', lg: 'center' },
        direction: { base: 'column', lg: 'row' },
        w: 'full',
    };

    return (
        <Flex {...styles} {...props}>
            <chakra.b color="primary" flexShrink={0} mr={4}>
                {label}:
            </chakra.b>

            <Flex wrap="nowrap" w="full">
                <MonoInput variant="flushed" value={value} isReadOnly ref={inputRef} />

                <Unless condition={hideButtons}>
                    <CopyOrSelect colorScheme="gray" inputRef={inputRef} ml={4} />
                </Unless>
            </Flex>
        </Flex>
    );
});
