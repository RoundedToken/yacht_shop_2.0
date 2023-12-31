import { createI18nMiddleware } from 'next-international/middleware';
import { NextRequest } from 'next/server';

const I18nMiddleware = createI18nMiddleware({
    locales: ['eng', 'est', 'rus'],
    defaultLocale: 'est',
});

export function middleware(request: NextRequest) {
    return I18nMiddleware(request);
}

export const config = {
    matcher: ['/((?!api|.*.xml$|static.*\\..*|_next|images|assets|icon.png|manifest.json|favicon.ico|robots.txt).*)'],
};
