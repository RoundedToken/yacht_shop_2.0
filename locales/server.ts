import { createI18nServer } from 'next-international/server';

export const { getI18n, getScopedI18n, getStaticParams, getCurrentLocale } = createI18nServer({
    eng: () => import('./eng'),
    est: () => import('./est'),
    rus: () => import('./rus'),
});

export type TGetI18n = Awaited<ReturnType<typeof getI18n>>;
