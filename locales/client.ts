import { createI18nClient } from 'next-international/client';

export const { useI18n, useScopedI18n, I18nProviderClient, useChangeLocale, useCurrentLocale } = createI18nClient({
    eng: () => import('./eng'),
    est: () => import('./est'),
    rus: () => import('./rus'),
});
