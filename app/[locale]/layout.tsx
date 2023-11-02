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
import { getAlternates } from '../../locales/getAlternates';

const nunito = Nunito({ subsets: ['latin', 'cyrillic'] });

type Props = {
    children: ReactNode;
    params: { locale: TLang };
};

export async function generateMetadata({ params: { locale } }: Props): Promise<Metadata> {
    const t = await getI18n();

    return {
        metadataBase: new URL(`${process.env.URL}`),
        alternates: getAlternates('/'),
        referrer: 'origin',
        generator: 'Next.js',
        authors: [{ name: 'Stepan Mikhalev', url: 'https://github.com/RoundedToken' }],
        keywords: t('site_keywords'),
        themeColor: '#ffffff',
        colorScheme: 'only light',
        applicationName: 'YachtShop',
        creator: 'Stepan Mikhalev',
        publisher: 'Stepan Mikhalev',
        category: t('yacht_equipment'),
        manifest: `${process.env.URL}/manifest.json`,
        title: {
            template: '%s | Parnu Yacht Shop',
            default: 'Parnu Yacht Shop',
        },
        viewport: 'width=device-width,initial-scale=1,maximum-scale=5',
        description: t('site_description_1'),
        openGraph: {
            url: `${locale}`,
            title: t('mainTitle'),
            type: 'website',
            siteName: 'YachtShop',
            description: t('og_description_1'),
        },
        other: {
            'google-site-verification': 'K07G4LxPDzsW8ys2hpF7pEn2ohHaaQrl5ovxiFPAags',
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
