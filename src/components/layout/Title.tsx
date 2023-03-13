import type { HeadingProps, HTMLChakraProps } from '@chakra-ui/react';
import { Heading } from '@chakra-ui/react';

export function Title(Props: HeadingProps) {
    const styles: HTMLChakraProps<'h1'> = {
        as: 'h1',
        textTransform: 'uppercase',
        mb: 16,
    };

    return <Heading size="lg" {...styles} {...Props} />;
}
