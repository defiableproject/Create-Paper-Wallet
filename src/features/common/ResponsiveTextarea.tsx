import { forwardRef } from 'react';

import type { TextareaProps } from '@chakra-ui/react';
import { useBreakpointValue } from '@chakra-ui/react';
import { MonoTextarea } from '@/components/chakra';

type Ref = HTMLTextAreaElement
type Props = TextareaProps

export const ResponsiveTextarea = forwardRef<Ref, Props>(function ResponsiveTextarea(Props, ref) {
    const rows = useBreakpointValue({ base: 4, md: 3, lg: 2 });

    return <MonoTextarea {...Props} rows={rows} ref={ref} />;
});
