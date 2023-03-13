import { atom } from 'jotai/vanilla';

import type { ActiveNav } from '@/types/page';

export const activeNav_A = atom<ActiveNav>('home');
