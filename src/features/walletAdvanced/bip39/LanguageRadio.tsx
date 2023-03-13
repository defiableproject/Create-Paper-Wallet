import type { LangAlias } from '@/types/libs/bip39';

import type { HTMLChakraProps, UseRadioProps } from '@chakra-ui/react';
import { useRadio } from '@chakra-ui/react';
import { BadgeInput } from '@/components/chakra';

interface Props extends UseRadioProps {
    value?: LangAlias,
    label: string,
}

export function LanguageRadio(Props: Props) {
    const { label, ...props } = Props;

    const { getInputProps, getCheckboxProps } = useRadio(props);

    const inputProps = getInputProps();
    const spanProps: HTMLChakraProps<'span'> = getCheckboxProps();

    spanProps.fontWeight = 'medium';

    return <BadgeInput {...{ inputProps, spanProps, label }} />;
}
