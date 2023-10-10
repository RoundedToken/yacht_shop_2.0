import React, { FC } from 'react';
import { IFavoritesEmpty } from '../interfaces/IFavoritesEmpty';
import starImg from '../../../public/assets/images/buttonStar.svg';
import starFilledImg from '../../../public/assets/images/buttonStarFilled.svg';
import arrowImg from '../../../public/assets/images/arrow.png';
import Image from 'next/image';
import ToCatalogButton from '../../../UI/ToCatalogButton/ToCatalogButton';

const FavoritesEmpty: FC<IFavoritesEmpty> = ({ styles, t }) => {
    return (
        <div className={styles.favoritesEmpty}>
            {t('favorites_text_1')}

            <span>{t('favorites_text_2')}</span>

            <div className={styles.imgContainer}>
                <Image className={styles.heart} src={starImg} alt="" width={45} height={45} />

                <Image className={styles.arrow} src={arrowImg} alt="" width={45} height={45} />

                <Image className={styles.heartFilled} src={starFilledImg} alt="" width={45} height={45} />
            </div>

            <ToCatalogButton t={t} />
        </div>
    );
};

export default FavoritesEmpty;
