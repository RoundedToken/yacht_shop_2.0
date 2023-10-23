import { getCurrentLocale } from './server';

export const getAlternates = (route?: string) => {
    const locale = getCurrentLocale();

    const languages = {
        rus: { en: `/eng${route}`, et: `/est${route}` },
        eng: { ru: `/rus${route}`, et: `/est${route}` },
        est: { en: `/eng${route}`, ru: `/rus${route}` },
    } as const;

    return { canonical: `${locale}${route}`, languages: languages[locale] };
};
