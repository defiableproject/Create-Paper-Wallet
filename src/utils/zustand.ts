import type { StoreApi } from 'zustand';

import type { Accessor, ValueTransformer } from 'monolite/set';
import { set } from 'monolite';

export function storePatcher<R>(store: StoreApi<R>) {
    return function <T, A extends Accessor<R, T>>(accessor: A, value: ValueTransformer<A>) {
        store.setState(prev => {
            return set(prev, accessor, value);
        });
    };
}

export function storeValue<R>(store: StoreApi<R>) {
    return store.getState();
}
