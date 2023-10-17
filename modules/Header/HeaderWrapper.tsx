'use client';

import Link from 'next/link';
import React, { ReactNode, useEffect, useRef } from 'react';
import styles from './Header.module.scss';
import Image from 'next/image';
import miniLogoImg from '../../public/assets/images/miniLogo.svg';
import { routeConstants } from '../../models/enums/EConstants';
import logo2Img from '../../public/assets/images/logo2.png';
import Lang from './components/Lang';
import { I18nProviderClient } from '../../locales/client';

const HeaderWrapper = ({ children, navbar }: { children: ReactNode; navbar: ReactNode }) => {
    const logoRef = useRef<HTMLImageElement>(null);
    const bottomContainerRef = useRef<HTMLDivElement>(null);
    const topContainerRef = useRef<HTMLDivElement>(null);
    const miniLogoRef = useRef<HTMLAnchorElement>(null);

    useEffect(() => {
        const offset = bottomContainerRef.current?.offsetTop;
        const diff = (offset || 0) - window.pageYOffset;

        window.onscroll = function () {
            if (logoRef.current && topContainerRef.current && miniLogoRef.current && bottomContainerRef && offset) {
                const opacity = (offset - window.pageYOffset) / diff;

                if (window.pageYOffset > offset) {
                    logoRef.current.style.display = 'none';
                    miniLogoRef.current.style.display = 'block';
                    bottomContainerRef.current.style.backgroundColor = 'rgb(254, 153, 1)';
                } else {
                    logoRef.current.style.display = 'block';
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
                <Image ref={logoRef} src={logo2Img} height={120} alt="" />
            </Link>

            <div ref={topContainerRef} className={styles.topContainer}>
                {children}

                <I18nProviderClient>
                    <Lang styles={styles} />
                </I18nProviderClient>
            </div>

            <div ref={bottomContainerRef} className={styles.bottomContainer}>
                <Link ref={miniLogoRef} className={styles.miniLogo} href={routeConstants.MAIN_ROUTE}>
                    <Image src={miniLogoImg} alt="" width={153} height={120} />
                </Link>

                {navbar}
            </div>
        </>
    );
};

export default HeaderWrapper;
