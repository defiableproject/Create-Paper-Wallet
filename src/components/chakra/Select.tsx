import { forwardRef, Ref } from 'react';

import type { ChakraStylesConfig, GroupBase, Props, SelectInstance } from 'chakra-react-select';
import { Select as _Select } from 'chakra-react-select';

import { tColor, tColorRaw } from '@/utils/chakra';

import SelectOption from '@/components/chakra/SelectOption';

export type SelectProps<Opt,
    Multi extends boolean = false,
    Group extends GroupBase<Opt> = GroupBase<Opt>> = Partial<Omit<Props<Opt, Multi, Group>, 'chakraStyles'>>
    & Required<Pick<Props<Opt, Multi, Group>, 'options' | 'getOptionValue' | 'getOptionLabel'>>

const styles: ChakraStylesConfig = {
    container: (base) => ({
        ...base,
        height: 'full',
        width: 'full',
    }),
    control: (base) => ({
        ...base,
        flexGrow: 1,
        height: 'full',
        pb: 1,
        pt: 1.5,
        width: 'full',

        _invalid: {
            borderColor: 'red.400',
            boxShadow: '0 0 0 1px ' + tColor('red.400'),
        },
        _focusVisible: {
            borderColor: 'primary',
            boxShadow: '0 0 0 1px ' + tColor('blue.500'),
        },
        _active: {
            borderColor: 'primary',
            boxShadow: '0 0 0 1px ' + tColor('blue.500'),
        },
        _disabled: {
            boxShadow: 'none',
        },
    }),
    dropdownIndicator: (base) => ({
        ...base,
        bg: 'transparent',
        cursor: 'inherit',
        px: 2,
    }),
    indicatorSeparator: (base) => ({
        ...base,
        display: 'none',
    }),
    multiValueRemove: (base) => ({
        ...base,
        'div:is([disabled], [data-disabled]) &': {
            display: 'none',
        },
    }),
    menu: (base) => ({
        ...base,
        zIndex: 3,
    }),
    menuList: (base) => ({
        ...base,

        _dark: {
            bgColor: tColorRaw('mirage.700'),
        },
    }),
};

function Component<Opt,
    Multi extends boolean = false,
    Group extends GroupBase<Opt> = GroupBase<Opt>>
(
    Props: SelectProps<Opt, Multi, Group>,
    ref: Ref<SelectInstance<Opt, Multi, Group>>,
) {
    const { components = {}, ...props } = Props;

    components.Option = SelectOption;

    return (
        <_Select<Opt, Multi, Group>
            components={components}
            selectedOptionStyle="check"
            chakraStyles={styles as never}
            ref={ref} {...props}
        />
    );
}

export const Select = forwardRef(Component) as typeof Component;
