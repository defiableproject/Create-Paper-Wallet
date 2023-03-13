import { createStore } from 'zustand/vanilla';
import { focusAtom } from 'jotai-optics';
import { atomWithStore } from 'jotai-zustand';

import type { VanityContext } from '@/types/vanity';

import { getNetwork } from '@/libs/networks';

export const vanityStore = createStore<VanityContext>(() => ({
    network: getNetwork('bitcoin')!,
    config: {
        value: '',
        suffix: false,
        caseSensitive: true,
        threads: navigator.hardwareConcurrency,

        valueOk: true,
    },
    status: {
        running: false,
        status: 'vanity.status.waiting',
        error: '',
    },
    statistics: {
        firstTick: 0,
        generated: 0,
    },
    result: null,
    workers: [],
    paper: {
        visible: false,
        index: 0,
    },
}));

export const vanity_A = atomWithStore(vanityStore);

export const network_A = focusAtom(vanity_A, _ => _.prop('network'));
export const config_A = focusAtom(vanity_A, _ => _.prop('config'));
export const status_A = focusAtom(vanity_A, _ => _.prop('status'));
export const statistics_A = focusAtom(vanity_A, _ => _.prop('statistics'));
export const result_A = focusAtom(vanity_A, _ => _.prop('result'));
export const paper_A = focusAtom(vanity_A, _ => _.prop('paper'));
