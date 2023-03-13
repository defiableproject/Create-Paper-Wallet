import type { DependencyList } from 'react';
import type { CheckHandler } from '@/types/general';

export function useCheckHandler(cb: (checked: boolean, value: string) => void, deps: DependencyList): CheckHandler {
    return ev => cb(ev.target.checked, ev.target.value);
}
