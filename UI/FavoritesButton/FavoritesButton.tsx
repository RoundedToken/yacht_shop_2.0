import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import starImg from '../../public/assets/images/buttonStar.svg';
import starFilledImg from '../../public/assets/images/buttonStarFilled.svg';
import { IFavoritesButton } from './IFavoritesButton';
import styles from './FavoritesButton.module.scss';
import { getIsInFavorites } from '../../redux/favoritesSlice/selectors';
import { usePathname } from 'next/navigation';
import { addFavoritesItem, removeFavoritesItem, toTrueTheUpdate } from '../../redux/favoritesSlice/favoritesSlice';
import Image from 'next/image';

const FavoritesButton: FC<IFavoritesButton> = ({ id }) => {
    const inIsFavorites = useSelector(getIsInFavorites(id));
    const locationPath = usePathname().split('/')[2];
    const dispatch = useDispatch();

    const addInFavorites = () => {
        dispatch(addFavoritesItem(id));
        if (locationPath !== 'favorites') {
            dispatch(toTrueTheUpdate());
        }
    };
    const removeFromFavorites = () => {
        dispatch(removeFavoritesItem(id));
    };

    return inIsFavorites ? (
        <Image
            className={styles.removeButton}
            src={starFilledImg}
            alt=""
            onClick={removeFromFavorites}
            width={27}
            height={27}
        />
    ) : (
        <Image className={styles.addButton} src={starImg} alt="" onClick={addInFavorites} width={27} height={27} />
    );
};

export default FavoritesButton;
