import { useCallback } from 'react';

import { PrimitiveAtom } from 'jotai/vanilla';
import { useSetAtom } from 'jotai/react';

import type { Accessor, ValueTransformer } from 'monolite/set';
import { set } from 'monolite';

export function usePatchAtom<R>(atom: PrimitiveAtom<R>) {
    const setAtom = useSetAtom(atom);

    return useCallback(<T, A extends Accessor<R, T>>(accessor: A, value: ValueTransformer<A>) => {
        return setAtom(prev => {
            return set(prev, accessor, value);
        });
    }, [ setAtom ]);
}
