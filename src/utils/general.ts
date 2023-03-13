export const asArr = Object.values;
export const freeze = Object.freeze;

export const isFileProtocol = location.host === '';
export const isCopyAvailable = isSecureContext && !!navigator.clipboard;

export function uniqueArr<T extends unknown[]>(arr: T): T {
    return [ ...new Set(arr) ] as T;
}

export function asset(path: string) {
    if (isFileProtocol) {
        return '.' + path;
    }

    return path;
}

export function bullets(...items: string[]) {
    return items.map(v => v.trim()).filter(Boolean).join(' • ');
}

export function hardTrim(text: string) {
    return String(text).replace(/\s+/g, ' ');
}
