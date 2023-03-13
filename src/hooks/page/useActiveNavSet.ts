import { useEffect } from 'react';
import { useSetAtom } from 'jotai/react';

import type { ActiveNav } from '@/types/page';
import { activeNav_A } from '@/state/page';

export function useActiveNavSet(value: ActiveNav) {
    const setActiveNav = useSetAtom(activeNav_A);

    return useEffect(() => {
        setActiveNav(value);

        return () => void setActiveNav('');
    }, [ setActiveNav, value ]);
}
