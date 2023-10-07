import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import arrowImg from '../../../public/assets/images/arrow.png';
import { ISortingHeader } from '../interfaces/ISortingHeader';
import { getSortingDisplay } from '../../../redux/stylesSlice/selectors';
import { switchSortingDisplay } from '../../../redux/stylesSlice/stylesSlice';
import { useI18n } from '../../../locales/client';
import Image from 'next/image';

const SortingHeader: FC<ISortingHeader> = ({ styles }) => {
    const dispatch = useDispatch();
    const sortingDisplay = useSelector(getSortingDisplay);
    const t = useI18n();

    const switchDisplay = () => {
        dispatch(switchSortingDisplay());
    };

    return (
        <div className={styles.header} onClick={switchDisplay}>
            {t('sorting')}

            <Image
                className={sortingDisplay === 'none' ? styles.rightArrow : styles.downArrow}
                src={arrowImg}
                alt=""
                width={30}
                height={30}
            />
        </div>
    );
};

export default SortingHeader;
