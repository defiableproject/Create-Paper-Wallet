import { PrimitiveAtom } from 'jotai/vanilla';
import { useAtom } from 'jotai/react';

import { usePatchAtom } from '@/hooks';

export function useAtomPatcher<R>(atom: PrimitiveAtom<R>) {
    const [ value, setValue ] = useAtom(atom);
    const patchValue = usePatchAtom(atom);

    return [ value, patchValue, setValue ] as const;
}
