import type { Network } from '@/types/libs/bitcoin';
import type { ErrorMessage } from '@/types/workers';

import type { FullAddress } from '@/libs/addresses';

export type AddressesMessage = { addresses: FullAddress[] }

export interface WorkerConfig {
    rootBase58: string;
    network: Network;
    path: string;
    quantity: number;
    startingIndex: number;
    useHardened: boolean;
}

export type IncomingMessage = WorkerConfig
export type OutgoingMessage = ErrorMessage | AddressesMessage
