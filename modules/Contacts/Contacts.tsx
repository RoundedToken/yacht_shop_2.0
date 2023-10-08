import React from 'react';
import styles from './Contacts.module.scss';
import GoogleMap from './components/GoogleMap';
import shopImage from '../../public/assets/images/shopImage.jpg';
import locationScreenImg from '../../public/assets/images/locationScreen.jpg';
import contactsImg from '../../public/assets/images/contacts.svg';
import mailImg from '../../public/assets/images/mail.svg';
import ringImg from '../../public/assets/images/ring.svg';
import compassImg from '../../public/assets/images/compass.jpg';
import Image from 'next/image';
import { TGetI18n } from '../../locales/server';
import SwiperWrapper from './components/SwiperWrapper';

const Contacts = ({ t }: { t: TGetI18n }) => {
    return (
        <>
            <div className={styles.rootContainer}>
                <div className={styles.leftContainer}>
                    <div className={styles.address}>
                        <Image src={contactsImg} alt="" width={50} height={50} />

                        <div className={styles.addressText}>
                            Pärnu JahtKlubi
                            <br />
                            Lootsi tn 6
                            <br />
                            Pärnu
                        </div>
                    </div>

                    <div className={styles.contacts}>
                        <Image src={ringImg} alt="" width={50} height={50} />
                        +372 589 450 74
                        <a href="https://wa.me/79854549470" target="_blank" rel="noreferrer">
                            {t('our_whats_app')}
                        </a>
                    </div>

                    <div className={styles.email}>
                        <Image src={mailImg} alt="" width={110} height={100} />

                        <a href="mailto:shop@yachtshop.ee">shop@yachtshop.ee</a>
                    </div>

                    <div className={styles.compass}>
                        <Image src={compassImg} alt="" width={1000} height={1000} />
                    </div>
                </div>

                <div className={styles.rightContainer}>
                    <div className={styles.topContainer}>
                        <div className={styles.topContainerLeft}>
                            <Image src={shopImage} alt="" height={350} priority />
                        </div>

                        <div className={styles.topContainerRight}>
                            {t('open')}

                            {`${t('wednesday')} \u{25CF} ${t('saturday')}`}

                            <div>
                                12<sup>00</sup> &ndash; 20<sup>00</sup>
                            </div>

                            {t('sunday')}

                            <div>
                                12<sup>00</sup> &ndash; 17<sup>00</sup>
                            </div>

                            {t('closed')}

                            {`${t('monday')} \u{25CF} ${t('tuesday')}`}
                        </div>
                    </div>

                    <div className={styles.bottomContainer}>
                        <GoogleMap styles={styles} />

                        <SwiperWrapper styles={styles}>
                            <div className="swiper-zoom-container">
                                <Image src={locationScreenImg} alt="" width={1300} height={1300} />
                            </div>
                        </SwiperWrapper>
                    </div>
                </div>
            </div>

            <div className={styles._mobileRootContainer}>
                <div className={styles.shopImg}>
                    <Image src={shopImage} alt="" width={750} height={440} priority />
                </div>

                <div className={styles.details}>
                    <div className={styles.compass}>
                        <Image src={compassImg} alt="" width={450} height={450} />
                    </div>

                    <div className={styles.address}>
                        <Image src={contactsImg} alt="" width={50} height={50} />

                        <div className={styles.addressText}>
                            Pärnu JahtKlubi
                            <br />
                            Lootsi tn 6, Pärnu
                        </div>
                    </div>

                    <div className={styles.workingMode}>
                        {t('open')}

                        {`${t('wednesday')} \u{25CF} ${t('saturday')}`}

                        <div>
                            12<sup>00</sup> &ndash; 20<sup>00</sup>
                        </div>

                        {t('sunday')}

                        <div>
                            12<sup>00</sup> &ndash; 17<sup>00</sup>
                        </div>

                        {t('closed')}

                        {`${t('monday')} \u{25CF} ${t('tuesday')}`}
                    </div>

                    <div className={styles.contacts}>
                        <Image src={ringImg} alt="" width={50} height={50} />

                        <div className={styles.contactsText}>
                            +372 589 450 74
                            <a href="https://wa.me/79854549470" target="_blank" rel="noreferrer">
                                {t('our_whats_app')}
                            </a>
                        </div>
                    </div>
                </div>

                <div className={styles.bottomContainer}>
                    <GoogleMap styles={styles} />

                    <div className={styles.email}>
                        <Image src={mailImg} alt="" width={110} height={100} />

                        <a href="mailto:shop@yachtshop.ee">shop@yachtshop.ee</a>
                    </div>

                    <SwiperWrapper styles={styles}>
                        <div className="swiper-zoom-container">
                            <Image src={locationScreenImg} alt="" width={1300} height={1300} />
                        </div>
                    </SwiperWrapper>
                </div>
            </div>
        </>
    );
};

export default Contacts;
