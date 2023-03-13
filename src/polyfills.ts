import { Buffer as SafeBuffer } from 'buffer/';

export const Buffer = SafeBuffer as unknown as BufferConstructor;
