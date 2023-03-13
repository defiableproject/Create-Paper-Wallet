import type { WalletAdvancedOption } from '@/types/walletAdvanced';
import { walletAdvancedStore } from '@/state/walletAdvanced';

import { storePatcher } from '@/utils/zustand';

export function changeOption(key: WalletAdvancedOption, value: boolean) {
    const patch = storePatcher(walletAdvancedStore);

    patch(_ => _.config[key], value);
}
