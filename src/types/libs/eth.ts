interface eth {
    addHexPrefix(hex: string): string;

    importPublic(pubKey: Buffer): string;

    bufferToHex(buffer: Buffer): string;
    publicToAddress(pubKey: string): Buffer;

    toChecksumAddress(address: string): string;

    keccak(data: string, bits?: number): Buffer;
    keccak256(data: string): Buffer;
}

export default eth;
