import { forwardRef } from 'react';

import { Input, InputProps } from '@chakra-ui/react';

type Ref = HTMLInputElement
type Props = InputProps

export const MonoInput = forwardRef<Ref, Props>(function MonoInput(Props, ref) {
    return <Input {...Props} fontFamily="mono" ref={ref} />;
});
