import type { ErrorMessage } from '@/types/workers';
import type { AddressMessage, AttemptMessage, OutgoingMessage } from '@/types/workers/vanity';

export function messageIsError(data: OutgoingMessage): data is ErrorMessage {
    return 'error' in data;
}

export function messageIsAttempt(data: OutgoingMessage): data is AttemptMessage {
    return 'attempts' in data;
}

export function messageIsAddress(data: OutgoingMessage): data is AddressMessage {
    return 'address' in data;
}
