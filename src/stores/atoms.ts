import { atom } from 'jotai'

export const searchAtom = atom('');
export const readOnlySearchAtom = atom((get) => get(searchAtom));
