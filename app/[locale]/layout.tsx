import '../../styles/globals.scss';
import { Nunito } from 'next/font/google';
import React, { ReactNode } from 'react';
import { Providers } from '../../redux/Providers';
import MainWrapper from '../../UI/MainWrapper/MainWrapper';
import LocalStorageWrapper from '../../hooks/LocalStorageWrapper';
import Modal from '../../modules/Modal/Modal';
import MobileModal from '../../modules/MobileModal/MobileModal';
import { getLangTag } from '../../locales/getLangTag';
import { TLang } from '../../models/types/TLang';
import Analytics from '../../matomo/Analytics';
import { Metadata } from 'next';
import { getI18n } from '../../locales/server';

const nunito = Nunito({ subsets: ['latin', 'cyrillic'] });

type Props = {
    children: ReactNode;
    params: { locale: TLang };
};

export async function generateMetadata(): Promise<Metadata> {
    const t = await getI18n();

    return {
        title: 'Parnu Yacht Shop',
        viewport: 'width=device-width,initial-scale=1,maximum-scale=1,user-scalable=0',
        description: t('site_description_1'),
        openGraph: {
            url: process.env.URL,
            title: t('mainTitle'),
            type: 'website',
            siteName: 'Parnu Yacht Shop',
            description: t('og_description_1'),
        },
    };
}

export default async function LocaleLayout({ children, params: { locale } }: Props) {
    const langTag = getLangTag(locale);

    return (
        <Providers>
            <LocalStorageWrapper>
                <html lang={langTag}>
                    <body className={nunito.className}>
                        <MainWrapper>{children}</MainWrapper>

                        <Modal />

                        <MobileModal />

                        <Analytics />
                    </body>
                </html>
            </LocalStorageWrapper>
        </Providers>
    );
}
