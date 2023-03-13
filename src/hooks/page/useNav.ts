import { useAtom } from 'jotai/react';

import { activeNav_A } from '@/state/page';

export function useNav() {
    const [ activeNav, setActiveNav ] = useAtom(activeNav_A);

    return { activeNav, setActiveNav } as const;
}
