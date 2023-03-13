export interface Lang {
    id: LangId,
    alias: LangAlias,
    label: string,
}

export type LangId = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
export type LangAlias =
    'chinese_simplified'
    | 'chinese_traditional'
    | 'czech'
    | 'english'
    | 'french'
    | 'italian'
    | 'japanese'
    | 'korean'
    | 'portuguese'
    | 'spanish'

export type Wordlists = Record<LangAlias, string[]>
