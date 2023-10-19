import React from 'react';
import { routeConstants } from '../../models/enums/EConstants';
import catalogImg from '../../public/assets/images/catalog.svg';
import styles from './ToCatalogButton.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { TGetI18n } from '../../locales/server';

const ToCatalogButton = ({ t }: { t: TGetI18n }) => {
    return (
        <Link href={routeConstants.CATEGORIES_ROUTE} className={styles.toCatalog}>
            <div className={styles.imgContainer}>
                <Image src={catalogImg} alt="" width={60} height={60} />
            </div>

            <div>{t('to_the_goods')}</div>
        </Link>
    );
};

export default ToCatalogButton;
