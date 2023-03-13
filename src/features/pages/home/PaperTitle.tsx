import type { HeadingProps } from '@chakra-ui/react';
import { Heading } from '@chakra-ui/react';

export function PaperTitle(Props: HeadingProps) {
    return <Heading as="h2" size="lg" {...Props} />;
}
