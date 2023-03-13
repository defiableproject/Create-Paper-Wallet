import { forwardRef } from 'react';

import { Textarea, TextareaProps } from '@chakra-ui/react';

type Ref = HTMLTextAreaElement
type Props = TextareaProps

export const MonoTextarea = forwardRef<Ref, Props>(function MonoTextarea(Props, ref) {
    return <Textarea {...Props} fontFamily="mono" ref={ref} />;
});
