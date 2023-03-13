import { forwardRef, ReactNode } from 'react';

import { chakra, HTMLChakraProps, useStyleConfig } from '@chakra-ui/react';

interface Props {
    inputProps: HTMLChakraProps<'input'>,
    spanProps?: HTMLChakraProps<'span'>,
}

type withLabel = { label: ReactNode, children?: undefined }
type withChildren = { children: ReactNode, label?: undefined }

export type BadgeInputProps = Props & (withLabel | withChildren)

export const BadgeInput = forwardRef<HTMLInputElement, BadgeInputProps>(function BadgeInput(Props, ref) {
    const { children, label, inputProps, spanProps = {} } = Props;

    spanProps.__css = useStyleConfig('BadgeInput');

    return (
        <chakra.label>
            <chakra.input {...inputProps} display="none" {...{ ref }} />
            <chakra.span {...spanProps}>{label ?? children}</chakra.span>
        </chakra.label>
    );
});
