import type { HDNode, Network } from '@/types/libs/bitcoin';
import type { Lang } from '@/types/libs/bip39';
import type { Application, MnemonicLength } from '@/types/libs/bip85';
import type { FullAddress } from '@/libs/addresses';

export interface WalletConfig {
    bip39: boolean;
    masterKey: boolean;
    bip85: boolean;
    derivation: boolean;
    addresses: boolean;
}

export type WalletAdvancedOption = keyof WalletConfig

export interface WalletBip39 {
    language: Lang;

    words: string;
    wordsOk: boolean;

    passphrase: string;

    seed: string;
    seedOk: boolean;
}

export interface WalletKeys {
    rootBase58: string;
    rootOk: boolean;

    root: HDNode | null;
    extended: HDNode | null;

    bip85: string;

    accPrivate: string;
    accPublic: string;

    extPrivate: string;
    extPublic: string;
}

export interface WalletBip85 {
    application: Application;

    index: number;
    indexOk: boolean;

    bip39: {
        language: Lang;

        length: MnemonicLength;
        lengthOk: boolean;
    };
    hex: {
        bytes: number;
        bytesOk: boolean;
    };
}

export interface WalletDerivation {
    path: string;
    pathOk: boolean;
    pathReadonly: boolean;

    account: number;
    intExt: number;
}

export interface WalletStatus {
    running: boolean;
    status: string;
    error: string;
}

export type WalletResult = FullAddress[]
export type WalletWorkers = Worker[]

export interface WalletAddresses {
    quantity: number;
    quantityOk: boolean;

    startingIndex: number;
    startingIndexOk: boolean;

    useHardened: boolean;
}

export interface WalletPaper {
    visible: boolean;
    index: number | null;
}

export interface WalletAdvancedContext {
    config: WalletConfig;
    bip39: WalletBip39;
    network: Readonly<Network>;
    keys: WalletKeys;
    bip85: WalletBip85;
    derivation: WalletDerivation;
    status: WalletStatus;
    result: WalletResult;
    workers: WalletWorkers;
    addresses: WalletAddresses;
    paper: WalletPaper;
}
