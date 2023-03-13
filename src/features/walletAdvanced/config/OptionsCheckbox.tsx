import { ReactNode, useMemo } from 'react';
import { useAtomValue } from 'jotai/react';

import type { WalletAdvancedOption } from '@/types/walletAdvanced';
import { config_A } from '@/state/walletAdvanced';
import { changeOption } from '@/state/walletAdvanced/config';

import { useCheckHandler } from '@/hooks';

import type { CheckboxProps, HTMLChakraProps } from '@chakra-ui/react';
import { chakra, Checkbox, Text } from '@chakra-ui/react';

interface Props extends HTMLChakraProps<'label'> {
    label: ReactNode,
    value: WalletAdvancedOption,
    inputProps?: CheckboxProps,
    isDisabled?: boolean;
}

export function OptionsCheckbox(Props: Props) {
    const { label, value, inputProps = {}, isDisabled, ...props } = Props;

    const advanced = useAtomValue(config_A);

    const isChecked = useMemo(() => advanced[value], [ advanced, value ]);
    const handleChange = useCheckHandler(c => changeOption(value, c), [ value ]);

    const styles: HTMLChakraProps<'label'> = {
        background: 'mirage.700',
        borderColor: 'mirage.600',

        alignItems: 'center',
        borderWidth: '2px',
        borderRadius: 'md',
        cursor: isDisabled ? 'not-allowed' : 'pointer',
        display: 'flex',
        justifyContent: 'space-between',
        px: 5,
        py: 4,
        w: 'full',

        transitionDuration: 'fast',
        transitionProperty: 'all',
        transitionTimingFunction: 'ease',

        _hover: {
            background: 'mirage.600',
            borderColor: 'mirage.500',
        },
    };

    inputProps.isDisabled = isDisabled;

    return (
        <chakra.label {...styles} {...props}>
            <Text>{label}</Text>

            <Checkbox {...inputProps} isChecked={isChecked} onChange={handleChange} />
        </chakra.label>
    );
}
