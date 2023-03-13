import type { Wordlists } from '@/types/libs/bip39';

import type bitcoin from '@/types/libs/bitcoin';
import type bip85 from '@/types/libs/bip85';
import type basex from '@/types/libs/basex';
import type bs58 from '@/types/libs/bs58';
import type bech32 from '@/types/libs/bech32';
import type createHash from '@/types/libs/createHash';
import type eth from '@/types/libs/eth';

export interface Libs {
    bitcoin: bitcoin,
    bip85: bip85,
    basex: typeof basex,
    bs58: bs58,
    bech32: bech32,
    createHash: typeof createHash,
    ethUtil: eth,
}

declare global {
    const libs: Libs;

    const WORDLISTS: Wordlists;
}
