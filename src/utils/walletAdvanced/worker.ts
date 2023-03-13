import type { ErrorMessage } from '@/types/workers';
import type { AddressesMessage, OutgoingMessage } from '@/types/workers/walletAdvanced';

export function messageIsError(data: OutgoingMessage): data is ErrorMessage {
    return 'error' in data;
}

export function messageIsAddresses(data: OutgoingMessage): data is AddressesMessage {
    return 'addresses' in data;
}
