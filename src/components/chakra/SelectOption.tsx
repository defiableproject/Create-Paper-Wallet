import { cx, tColorRaw } from '@/utils/chakra';

import type { GroupBase, OptionProps } from 'chakra-react-select';
import { chakra } from '@chakra-ui/react';
import { components } from 'react-select';

const ChakraOption = chakra(components.Option, {
    baseStyle: {
        _light: {
            _hover: {
                bgColor: tColorRaw('blue.100'),
            },

            '&.focused': {
                bgColor: tColorRaw('blue.100'),
            },
            '&.selected': {
                bgColor: tColorRaw('blue.500'),
            },
        },
        _dark: {
            _hover: {
                bgColor: tColorRaw('mirage.600'),
            },

            '&.focused': {
                bgColor: tColorRaw('mirage.600'),
            },
            '&.selected': {
                bgColor: tColorRaw('blue.500'),
            },
        },

        '&.disabled': {
            color: tColorRaw('gray.600'),
            cursor: 'disabled',
            pointerEvents: 'none',
        },
    },
}) as typeof components.Option;

export default function SelectOption<Opt,
    Multi extends boolean = false,
    Group extends GroupBase<Opt> = GroupBase<Opt>>
(
    Props: OptionProps<Opt, Multi, Group>,
) {
    const { children, ...props } = Props;
    const { onMouseMove, onMouseOver, ...rest } = props.innerProps;

    const className = cx(
        props.className,
        props.isFocused && 'focused',
        props.isSelected && 'selected',
        props.isDisabled && 'disabled',
    );

    const newProps = { ...props, className, innerProps: rest };

    return (
        <ChakraOption {...newProps}>
            {children}
        </ChakraOption>
    );
}
