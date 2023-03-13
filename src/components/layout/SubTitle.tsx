import type { HeadingProps, HTMLChakraProps } from '@chakra-ui/react';
import { Heading } from '@chakra-ui/react';

export function SubTitle(Props: HeadingProps) {
    const styles: HTMLChakraProps<'h2'> = {
        as: 'h2',
        textTransform: 'uppercase',
        mb: 4,
    };

    return <Heading size="md" {...styles} {...Props} />;
}
