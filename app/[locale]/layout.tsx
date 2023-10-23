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
import { getCurrentLocale, getI18n } from '../../locales/server';
import { getAlternates } from '../../locales/getAlternates';
import Head from 'next/head';

const nunito = Nunito({ subsets: ['latin', 'cyrillic'] });

type Props = {
    children: ReactNode;
    params: { locale: TLang };
};

export async function generateMetadata(): Promise<Metadata> {
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
        creator: 'Stepan Mikhalev',
        publisher: 'Stepan Mikhalev',
        category: t('yacht_equipment'),
        title: {
            template: '%s | Parnu Yacht Shop',
            default: 'Parnu Yacht Shop',
        },
        viewport: 'width=device-width,initial-scale=1,maximum-scale=1,user-scalable=0',
        description: t('site_description_1'),
        openGraph: {
            url: process.env.URL,
            title: t('mainTitle'),
            type: 'website',
            siteName: 'YachtShop',
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
                    <Head>
                        <script id="matomo" async>
                            {`var _mtm = window._mtm = window._mtm || [];
            _mtm.push({'mtm.startTime': (new Date().getTime()), 'event': 'mtm.Start'});
            (function() {
            var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
            g.async=true; g.src='${process.env.MATOMO_URL}'; s.parentNode.insertBefore(g,s);
            })();`}
                        </script>
                        {/* <Analytics /> */}
                    </Head>
                    <body className={nunito.className}>
                        <MainWrapper>{children}</MainWrapper>

                        <Modal />

                        <MobileModal />
                    </body>
                </html>
            </LocalStorageWrapper>
        </Providers>
    );
}
