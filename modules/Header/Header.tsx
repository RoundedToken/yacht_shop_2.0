'use client';

import React, { useEffect, useRef } from 'react';
import styles from './Header.module.scss';
import logo2Img from '../../public/assets/images/logo2.png';
import miniLogoImg from '../../public/assets/images/miniLogo.svg';
import contactsImg from '../../public/assets/images/contacts.svg';
import { routeConstants } from '../../models/enums/EConstants';
import Link from 'next/link';
import Image from 'next/image';
import Name from './components/Name';
import Lang from './components/Lang';
import NavBarItem from './components/NavBarItem';
import NavBar from './components/NavBar';
import MobileMenu from './components/MobileMenu';
import { I18nProviderClient, useI18n } from '../../locales/client';

const Header = () => {
    const logoRef = useRef<HTMLImageElement>(null);
    const bottomContainerRef = useRef<HTMLDivElement>(null);
    const topContainerRef = useRef<HTMLDivElement>(null);
    const miniLogoRef = useRef<HTMLImageElement>(null);
    // const t = useTranslations('Index');
    const t = useI18n();

    useEffect(() => {
        const offset = bottomContainerRef.current?.offsetTop;
        const diff = (offset || 0) - window.pageYOffset;

        window.onscroll = function () {
            if (logoRef.current && topContainerRef.current && miniLogoRef.current && bottomContainerRef && offset) {
                const opacity = (offset - window.pageYOffset) / diff;

                if (window.pageYOffset > offset) {
                    miniLogoRef.current.style.display = 'block';
                    bottomContainerRef.current.style.backgroundColor = 'rgb(254, 153, 1)';
                } else {
                    miniLogoRef.current.classList.remove(styles.miniLogo__after);
                    bottomContainerRef.current.style.backgroundColor = 'white';
                    topContainerRef.current.style.opacity = `${opacity}`;
                    logoRef.current.style.opacity = `${opacity}`;
                    miniLogoRef.current.style.display = 'none';
                }
            }
        };
    }, []);

    return (
        <>
            <Link href={routeConstants.MAIN_ROUTE} className={styles.logo}>
                <Image ref={logoRef} src={logo2Img} height={120} width={160} alt="" />
            </Link>

            <div ref={topContainerRef} className={styles.topContainer}>
                <MobileMenu styles={styles} />

                <Name styles={styles} />

                <NavBarItem
                    styles={styles}
                    route={routeConstants.CONTACTS_ROUTE}
                    src={contactsImg}
                    className={styles.contacts}
                >
                    {t('contacts')}
                </NavBarItem>

                <Lang styles={styles} />
            </div>

            <div ref={bottomContainerRef} className={styles.bottomContainer}>
                <Link href={routeConstants.MAIN_ROUTE}>
                    <Image
                        ref={miniLogoRef}
                        className={styles.miniLogo}
                        src={miniLogoImg}
                        alt=""
                        width={153}
                        height={120}
                    />
                </Link>

                <NavBar styles={styles} />
            </div>
        </>
    );
};

const WrappedHeader = () => (
    <I18nProviderClient>
        <Header />
    </I18nProviderClient>
);

export default WrappedHeader;
