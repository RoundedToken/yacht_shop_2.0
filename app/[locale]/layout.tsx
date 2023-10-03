import '../../styles/globals.scss';
import { Nunito } from 'next/font/google';
import React, { ReactNode } from 'react';
import Header from '../../modules/Header/Header';
import { Providers } from '../../redux/Providers';
import SearchBar from '../../modules/SearchBar/SearchBar';
import Footer from '../../modules/Footer/Footer';
import { getI18n } from '../../locales/server';

const nunito = Nunito({ subsets: ['latin', 'cyrillic'] });

type Props = {
    children: ReactNode;
    params: { locale: string };
};

export async function generateMetadata() {
    const t = await getI18n();

    return {
        title: t('title'),
    };
}

export default async function LocaleLayout({ children, params: { locale } }: Props) {
    const t = await getI18n();

    return (
        <Providers>
            <html lang={locale}>
                <body className={nunito.className}>
                    <Header />

                    <SearchBar />

                    {children}

                    <Footer t={t} />
                </body>
            </html>
        </Providers>
    );
}
