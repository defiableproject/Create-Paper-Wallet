declare function basex(alphabet: string): BaseX;

interface BaseX {
    encode(buf: Buffer): string;

    decode(str: string): Buffer;
    decodeUnsafe(str: string): Buffer | null;
}

export default basex;
