import type { DependencyList } from 'react';
import type { StringHandler } from '@/types/general';

export function useStringHandler(cb: (value: string) => void, deps: DependencyList): StringHandler {
    return ev => cb(ev.target.value);
}
