import type { ToastId, UseToastOptions } from '@chakra-ui/react';
import { useToast } from '@chakra-ui/react';

export interface ErrToastOptions extends UseToastOptions {
    error: unknown,
}

export function notifyError(toast: ReturnType<typeof useToast>, options: ErrToastOptions) {
    const { error, ..._options } = options;

    console.log(error);

    let id: ToastId | undefined;
    let description = _options.description;
    const status = 'error';

    if (error instanceof Error) {
        id = error.message;
        description ??= error.message;
    } else {
        id = _options.id ?? String(error);
    }

    if (id !== undefined && toast.isActive(id)) {
        return;
    }

    return toast({ ..._options, id, status, description });
}
