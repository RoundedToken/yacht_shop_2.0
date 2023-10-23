import { getCurrentLocale } from './server';

export const getAlternates = (route?: string) => {
    const locale = getCurrentLocale();
    const baseURL = process.env.URL;

    const languages = {
        rus: { en: `${baseURL}/eng${route}`, et: `${baseURL}/est${route}` },
        eng: { ru: `${baseURL}/rus${route}`, et: `${baseURL}/est${route}` },
        est: { en: `${baseURL}/eng${route}`, ru: `${baseURL}/rus${route}` },
    } as const;

    return { canonical: `${baseURL}/${locale}${route}`, languages: languages[locale] };
};
