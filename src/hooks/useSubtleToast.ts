import type { UseToastOptions } from '@chakra-ui/react';
import { useToast } from '@chakra-ui/react';

export const useSubtleToast = (options: UseToastOptions = {}) => {
    return useToast({ variant: 'subtle', position: 'bottom', ...options });
};
