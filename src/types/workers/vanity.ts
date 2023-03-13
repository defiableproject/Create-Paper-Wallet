import type { Network } from '@/types/libs/bitcoin';
import type { VanityConfig } from '@/types/vanity';
import type { ErrorMessage } from '@/types/workers';

import type { Address } from '@/libs/addresses';

export type AttemptMessage = { attempts: number }
export type AddressMessage = AttemptMessage & { address: Address }

export interface WorkerConfig extends Omit<VanityConfig, 'threads'> {
    network: Network;
}

export type IncomingMessage = WorkerConfig
export type OutgoingMessage = ErrorMessage | AttemptMessage | AddressMessage
