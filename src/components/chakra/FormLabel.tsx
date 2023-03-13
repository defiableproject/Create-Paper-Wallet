import { ReactNode } from 'react';

import type { FormLabelProps as Props, TooltipProps } from '@chakra-ui/react';
import { FormLabel as _FormLabel, Tooltip } from '@chakra-ui/react';

export interface FormLabelProps extends Omit<Props, 'title'> {
    title: ReactNode;
    tooltip?: Omit<TooltipProps, 'label'>;
}

export function FormLabel(Props: FormLabelProps) {
    const { children, title, tooltip = {}, ...props } = Props;

    return (
        <_FormLabel {...props}>
            <Tooltip placement="right" {...tooltip} label={title}>
                <b>{children}</b>
            </Tooltip>
        </_FormLabel>
    );
}
