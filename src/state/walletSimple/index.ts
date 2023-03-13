import { createStore } from 'zustand/vanilla';
import { focusAtom } from 'jotai-optics';
import { atomWithStore } from 'jotai-zustand';

import type { WalletSimpleContext } from '@/types/walletSimple';

import { getNetwork } from '@/libs/networks';

export const walletSimpleStore = createStore<WalletSimpleContext>(() => ({
    network: getNetwork('bitcoin')!,
    config: {
        quantity: 4,
        quantityOk: true,
    },
    status: {
        running: false,
        status: 'walletSimple.status.waiting',
        error: '',
    },
    result: [],
    workers: [],
    paper: {
        visible: false,
        index: null,
    },
}));

export const walletSimple_A = atomWithStore(walletSimpleStore);

export const network_A = focusAtom(walletSimple_A, _ => _.prop('network'));
export const config_A = focusAtom(walletSimple_A, _ => _.prop('config'));
export const status_A = focusAtom(walletSimple_A, _ => _.prop('status'));
export const result_A = focusAtom(walletSimple_A, _ => _.prop('result'));
export const paper_A = focusAtom(walletSimple_A, _ => _.prop('paper'));
