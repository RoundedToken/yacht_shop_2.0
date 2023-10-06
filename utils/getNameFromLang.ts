import { TLang } from '../models/types/TLang';
import { TNameFromLang } from '../models/types/TNameFromLang';

export const getNameFromLang = (lang: TLang) => {
    const map = new Map<TLang, TNameFromLang>([
        ['eng', 'NameENG'],
        ['rus', 'Name'],
        ['est', 'NameEST'],
    ]);

    return map.get(lang) ?? 'Name';
};
