import type { ChangeEvent, Dispatch, SetStateAction } from 'react';

export type InputChange = ChangeEvent<HTMLInputElement>
export type TextareaChange = ChangeEvent<HTMLTextAreaElement>
export type SelectChange = ChangeEvent<HTMLSelectElement>

export type StringHandler = (ev: ChangeEvent<{ value: string }>) => void
export type CheckHandler = (ev: ChangeEvent<{ checked: boolean, value: string }>) => void

export type StrNum = string | number
export type StrNumBool = StrNum | boolean

export type StateSetter<Data> = Dispatch<SetStateAction<Data>>
