import { TLang } from '../models/types/TLang';

export const getLangTag = (lang: TLang) => {
    const tags = { eng: 'en', rus: 'ru', est: 'et' } as const;
    return tags[lang];
};
