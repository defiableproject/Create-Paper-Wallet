import { forwardRef } from 'react';

import { chakra, TextProps } from '@chakra-ui/react';

type Ref = HTMLSpanElement
type Props = TextProps

export const Mono = forwardRef<Ref, Props>(function Mono(Props, ref) {
    return <chakra.span {...Props} fontFamily="mono" ref={ref} />;
});
