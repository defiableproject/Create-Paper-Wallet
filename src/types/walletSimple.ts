import type { Network } from '@/types/libs/bitcoin';

import type { Address } from '@/libs/addresses';

export interface WalletConfig {
    quantity: number;
    quantityOk: boolean;
}

export interface WalletStatus {
    running: boolean;
    status: string;
    error: string;
}

export type WalletResult = Address[]
export type WalletWorkers = Worker[]

export interface WalletPaper {
    visible: boolean;
    index: number | null;
}

export interface WalletSimpleContext {
    network: Network,
    config: WalletConfig,
    status: WalletStatus;
    result: WalletResult;
    workers: WalletWorkers;
    paper: WalletPaper;
}
