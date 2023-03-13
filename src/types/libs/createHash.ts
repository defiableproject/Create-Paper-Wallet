import type { Transform as TransformBase } from 'stream';

declare function createHash(algo: string): Hash;

export declare class Transform extends TransformBase {
    update(data: string | Buffer, inputEnc?: BufferEncoding, outputEnc?: BufferEncoding): this;
}

export declare class Hash extends Transform {
    digest(): Buffer;
    digest(enc: BufferEncoding): string;
}

export default createHash;
