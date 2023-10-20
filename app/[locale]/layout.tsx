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

const nunito = Nunito({ subsets: ['latin', 'cyrillic'] });

type Props = {
    children: ReactNode;
    params: { locale: TLang };
};

export function metadata() {
    return {
        title: 'Parnu Yacht Shop',
        visualViewport: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0',
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
