interface bech32 {
    encode(prefix: string, words: string | unknown[], limit?: number): string;

    toWords(buf: Buffer): number[];
}

export default bech32;
