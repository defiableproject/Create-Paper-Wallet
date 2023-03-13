import type { Network } from '@/types/libs/bitcoin';
import type { ErrorMessage } from '@/types/workers';

import type { Address } from '@/libs/addresses';

export type AddressesMessage = { addresses: Address[] }

export interface WorkerConfig {
    network: Network;
    quantity: number;
}

export type IncomingMessage = WorkerConfig
export type OutgoingMessage = ErrorMessage | AddressesMessage
