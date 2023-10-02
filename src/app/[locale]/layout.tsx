import '../../styles/globals.scss';
import { Nunito } from 'next/font/google';
import React, { ReactNode } from 'react';
import Header from '../../modules/Header/Header';
import { Providers } from '../../redux/Providers';
import { NextIntlClientProvider, createTranslator } from 'next-intl';
import { notFound } from 'next/navigation';
import SearchBar from '../../modules/SearchBar/SearchBar';

const nunito = Nunito({ subsets: ['latin', 'cyrillic'] });

type Props = {
    children: ReactNode;
    params: { locale: string };
};

async function getMessages(locale: string) {
    try {
        return (await import(`../../i18n/${locale}.json`)).default;
    } catch (error) {
        notFound();
    }
}

export async function generateStaticParams() {
    return ['eng', 'est', 'rus'].map((locale) => ({ locale }));
}

export async function generateMetadata({ params: { locale } }: Props) {
    const messages = await getMessages(locale);

    const t = createTranslator({ locale, messages });

    return {
        title: t('LocaleLayout.title'),
    };
}

export default async function LocaleLayout({ children, params: { locale } }: Props) {
    const messages = await getMessages(locale);

    return (
        <Providers>
            <html lang={locale}>
                <NextIntlClientProvider locale={locale} messages={messages}>
                    <body className={nunito.className}>
                        <Header />

                        <SearchBar />

                        {children}
                    </body>
                </NextIntlClientProvider>
            </html>
        </Providers>
    );
}
