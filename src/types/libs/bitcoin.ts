interface bitcoin {
    networks: Readonly<Networks>;
    ECPair: ECPairStatic;
    HDNode: HDNodeStatic;
}

export declare class HDNode {
    chainCode: Uint8Array;
    depth: number;
    index: number;
    keyPair: ECPair;
    parentFingerprint: number;

    neutered(): HDNode;
    isNeutered(): boolean;

    derive(index: number): HDNode;
    deriveHardened(index: number): HDNode;

    toBase58(): string;
}

interface HDNodeStatic {
    fromBase58(base58: string, network?: Network): HDNode;
    fromSeedBuffer(buffer: Uint8Array, network?: Network): HDNode;
    fromSeedHex(hex: string, network?: Network): HDNode;
}

export declare class ECPair {
    compressed: boolean;
    d: BigInteger;
    network: Network;

    getAddress(): string;
    getNetwork(): Network;
    getPublicKeyBuffer(): Buffer;

    toWIF(): string;
}

interface ECPairOptions {
    network?: Network;
}

interface ECPairStatic {
    makeRandom(options?: ECPairOptions): ECPair;
}

export interface BigInteger {
    toBuffer(size?: number): Buffer;
}

export interface Networks {
    [key: string]: Network;
}

export interface NetworkExtension {
    alias: string;
    name: string;

    bip44: number;
    vanityPrefix: string[];
    bip49available: boolean;
    segwitAvailable: boolean;
}

export interface NetworkRaw {
    bech32?: string;
    messagePrefix: string;
    bip32: {
        public: number;
        private: number;
    };
    pubKeyHash: number;
    scriptHash: number;
    wif: number;
}

export type Network = Readonly<NetworkRaw & NetworkExtension>

export type NetworkPartial = NetworkRaw
    & Pick<NetworkExtension, 'alias' | 'name'>
    & Partial<Omit<NetworkExtension, 'alias' | 'name'>>

export default bitcoin;
