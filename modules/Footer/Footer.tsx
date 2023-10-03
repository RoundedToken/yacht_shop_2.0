// 'use client';

import React from 'react';
import styles from './Footer.module.scss';
import mailImg from '../../public/assets/images/mail.svg';
import contactsImg from '../../public/assets/images/contacts.svg';
import shellImg from '../../public/assets/images/shell.png';
import shell2Img from '../../public/assets/images/shell2.svg';
import ringImg from '../../public/assets/images/ring.svg';
import { routeConstants } from '../../models/enums/EConstants';
import Link from 'next/link';
import Image from 'next/image';
import { TGetI18n } from '../../locales/server';

const Footer = ({ t }: { t: TGetI18n }) => {
    // const location = '/';
    // '/' + usePathname().split('/')[1];

    return (
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>
                <div className={styles.waves}>
                    <div className={`${styles.wave}  ${styles.wave1}`}></div>
                    <div className={`${styles.wave}  ${styles.wave2}`}></div>
                    <div className={`${styles.wave}  ${styles.wave3}`}></div>
                    <div className={`${styles.wave}  ${styles.wave4}`}></div>
                </div>

                {/* {location !== routeConstants.CONTACTS_ROUTE && ( */}
                <div className={styles.grid}>
                    <Link href={routeConstants.CONTACTS_ROUTE} className={styles.address}>
                        <Image src={contactsImg} alt="" width={38} height={38} />

                        <div className={styles.addressText}>
                            Pärnu JahtKlubi
                            <br /> Lootsi tn 6
                            <br /> Pärnu
                        </div>
                    </Link>

                    <div className={styles.workingMode}>
                        <Image src={shellImg} alt="" width={28} height={28} />

                        {`${t('wed')}\u{2013}${'sat'} \u{25CF} 12\u{2013}20`}
                        <br />
                        {`${t('sun')} \u{25CF} 12\u{2013}17`}

                        <Image src={shell2Img} alt="" width={25} height={21} />

                        {`${t('mon')},${t('tue')} \u{25CF} ${t('closed')}`}
                    </div>

                    <div className={styles.contacts}>
                        <Image src={ringImg} alt="" width={36} height={36} />
                        +372 589 450 74
                        <a href="https://wa.me/79854549470" target="_blank" rel="noreferrer">
                            {t('our_whats_app')}
                        </a>
                    </div>

                    <div className={styles.email}>
                        <Image src={mailImg} alt="" width={85} height={77} />
                        <a href="mailto:shop@yachtshop.ee">shop@yachtshop.ee</a>
                    </div>
                </div>
                {/* )} */}
            </div>
        </footer>
    );
};

export default Footer;
