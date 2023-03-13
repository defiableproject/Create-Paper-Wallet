interface bs58 {
    encode(buf: Buffer): string;

    decode(str: string): Buffer;
    decodeUnsafe(str: string): Buffer | null;
}

export default bs58;
