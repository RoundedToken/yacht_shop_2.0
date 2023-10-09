import React from 'react';
import styles from './Crimping.module.scss';
import Form from './components/Form';
import crimpingImg from '../../public/assets/images/crimpingImg.jpg';
import wireImg from '../../public/assets/images/tros.svg';
import Image from 'next/image';
import Calculation from './components/Calculation';
import { TGetI18n } from '../../locales/server';

const Crimping = ({t} : {t: TGetI18n}) => {
    return (
        <div className={styles.rootContainer}>
            <div className={styles.crimpingImg}>
                {<Image src={crimpingImg} alt="" width={750} height={450} priority />}
            </div>

            <div className={styles.description}>
                <div className={styles.descriptionTitle}>{t('rope_crimping')}</div>
                <div className={styles.descriptionContent}>{t('crimping_text_1')}</div>
                <div className={styles.descriptionBottom}>{t('crimping_text_2')}</div>
            </div>

            <div className={styles.wireContainer}>
                <div className={styles.wireContainerName}>{t('cable')}</div>

                <Image src={wireImg} alt="" width={100} height={100} />

                <div className={styles.wireContainerValue}>{'1 x 19'}</div>
            </div>

            <div className={styles.blueContainer} />

            <Form styles={styles} t={t} />

            <div className={styles.breakLine1} />
            <div className={styles.breakLine2} />

            <div className={styles.submitContainer}>
                <button form="crimpingForm" className={styles.submit} type="submit">
                    <div>{t('to_count')}</div>
                </button>
            </div>

            <div className={styles.summaryTitle}>
                <div>{t('calculation')}</div>
            </div>

            <Calculation />
        </div>
    );
};

export default Crimping;
