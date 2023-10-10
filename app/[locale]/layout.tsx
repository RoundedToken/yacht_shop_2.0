import '../../styles/globals.scss';
import { Nunito } from 'next/font/google';
import React, { ReactNode } from 'react';
import Header from '../../modules/Header/Header';
import { Providers } from '../../redux/Providers';
import SearchBar from '../../modules/SearchBar/SearchBar';
import MainWrapper from '../../UI/MainWrapper/MainWrapper';
import LocalStorageWrapper from '../../hooks/LocalStorageWrapper';

const nunito = Nunito({ subsets: ['latin', 'cyrillic'] });

type Props = {
    children: ReactNode;
    params: { locale: string };
};

export async function generateMetadata() {
    return {
        title: 'Parnu Yacht Shop',
    };
}

export default async function LocaleLayout({ children, params: { locale } }: Props) {
    return (
        <Providers>
            <LocalStorageWrapper>
                <html lang={locale}>
                    <body className={nunito.className}>
                        <MainWrapper>
                            <Header />

                            <SearchBar />

                            {children}
                        </MainWrapper>
                    </body>
                </html>
            </LocalStorageWrapper>
        </Providers>
    );
}
