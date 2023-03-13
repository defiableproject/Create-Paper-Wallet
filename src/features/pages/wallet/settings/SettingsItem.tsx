import { memo, ReactNode } from 'react';

import type { AccordionItemProps, ButtonProps } from '@chakra-ui/react';
import { AccordionButton, AccordionIcon, AccordionItem, AccordionPanel } from '@chakra-ui/react';

interface Props extends AccordionItemProps {
    label: ReactNode;
    children: ReactNode;
}

export const SettingsItem = memo(function SettingsItem(Props: Props) {
    const { children, label, ...props } = Props;

    const itemStyles: AccordionItemProps = {
        border: 'none',

        sx: {
            '& > .chakra-collapse': {
                overflow: 'initial !important',
            },
        },
    };

    const buttonStyles: ButtonProps = {
        borderRadius: 'md',
        fontSize: { base: 'lg', lg: 'xl' },
        fontWeight: 'medium',
        py: { base: 3, lg: 4 },

        _hover: {
            bgColor: 'mirage.800',
        },
    };

    return (
        <AccordionItem {...itemStyles} {...props}>
            <h2>
                <AccordionButton {...buttonStyles}>
                    {label}

                    <AccordionIcon boxSize={10} ml={3} />
                </AccordionButton>
            </h2>

            <AccordionPanel py={6}>
                {children}
            </AccordionPanel>
        </AccordionItem>
    );
});
