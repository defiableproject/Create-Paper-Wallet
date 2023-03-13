import type { Network } from '@/types/libs/bitcoin';
import type { Address } from '@/libs/addresses';

export interface VanityConfig {
    value: string;
    suffix: boolean;
    caseSensitive: boolean;
    threads: number;

    valueOk: boolean;
}

export interface VanityStatus {
    running: boolean;
    status: string;
    error: string;
}

export interface VanityStatistics {
    firstTick: number;
    generated: number;
}

export type VanityResult = Address | null
export type VanityWorkers = Worker[]

export interface VanityPaper {
    visible: boolean;
    index: number,
}

export interface VanityContext {
    network: Network,
    config: VanityConfig,
    status: VanityStatus,
    statistics: VanityStatistics,
    result: VanityResult,
    workers: VanityWorkers,
    paper: VanityPaper;
}
