import { createStore } from 'zustand/vanilla';
import { focusAtom } from 'jotai-optics';
import { atomWithStore } from 'jotai-zustand';

import type { WalletAdvancedContext } from '@/types/walletAdvanced';

import { getNetwork } from '@/libs/networks';
import { getLanguage } from '@/libs/bip39';
import { getApplication, getMnemonicLength } from '@/libs/bip85';

export const walletAdvancedStore = createStore<WalletAdvancedContext>(() => ({
    config: {
        bip39: true,
        masterKey: true,
        bip85: false,
        derivation: false,
        addresses: true,
    },
    network: getNetwork('bitcoin')!,
    bip39: {
        language: getLanguage('english'),

        words: '',
        wordsOk: true,

        passphrase: '',

        seed: '',
        seedOk: true,
    },
    keys: {
        rootBase58: '',
        rootOk: true,

        root: null,
        extended: null,

        bip85: '',

        accPrivate: '',
        accPublic: '',

        extPrivate: '',
        extPublic: '',
    },
    bip85: {
        application: getApplication('wif'),

        index: 0,
        indexOk: true,

        bip39: {
            language: getLanguage('english'),

            length: getMnemonicLength(12),
            lengthOk: true,
        },
        hex: {
            bytes: 64,
            bytesOk: true,
        },
    },
    derivation: {
        path: `m/0'/0'`,
        pathOk: true,
        pathReadonly: false,

        account: 0,
        intExt: 0,
    },
    status: {
        running: false,
        status: 'walletAdvanced.status.waiting',
        error: '',
    },
    result: [],
    workers: [],
    addresses: {
        quantity: 4,
        quantityOk: true,

        startingIndex: 0,
        startingIndexOk: true,

        useHardened: false,
    },
    paper: {
        visible: false,
        index: null,
    },
}));

export const walletAdvanced_A = atomWithStore(walletAdvancedStore);

export const config_A = focusAtom(walletAdvanced_A, _ => _.prop('config'));
export const network_A = focusAtom(walletAdvanced_A, _ => _.prop('network'));
export const bip39_A = focusAtom(walletAdvanced_A, _ => _.prop('bip39'));
export const bip85_A = focusAtom(walletAdvanced_A, _ => _.prop('bip85'));
export const keys_A = focusAtom(walletAdvanced_A, _ => _.prop('keys'));
export const derivation_A = focusAtom(walletAdvanced_A, _ => _.prop('derivation'));
export const status_A = focusAtom(walletAdvanced_A, _ => _.prop('status'));
export const result_A = focusAtom(walletAdvanced_A, _ => _.prop('result'));
export const addresses_A = focusAtom(walletAdvanced_A, _ => _.prop('addresses'));
export const paper_A = focusAtom(walletAdvanced_A, _ => _.prop('paper'));
