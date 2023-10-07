import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { IProductPic } from './IProductPic';
import defaultProductImg from '../../public/assets/images/defaultProduct.svg';
import styles from './ProductPic.module.scss';
import { setModalType, setPicSrc } from '../../redux/modalSlice/modalSlice';
import { switchModalDisplay } from '../../redux/stylesSlice/stylesSlice';
import Image from 'next/image';

const ProductPic: FC<IProductPic> = ({ src }) => {
    const dispatch = useDispatch();
    const [isImgError, setIsImgError] = useState(false);

    const picOnClick = () => {
        dispatch(setModalType('pic'));
        dispatch(setPicSrc(src));
        dispatch(switchModalDisplay());
        document.body.style.overflow = 'hidden';
    };

    return (
        <>
            {!isImgError && (
                <Image
                    className={styles.productPic}
                    src={src[0]}
                    alt=""
                    onClick={picOnClick}
                    onError={() => setIsImgError(true)}
                    width={100}
                    height={100}
                />
            )}
            {isImgError && (
                <Image className={styles.defaultProductPic} src={defaultProductImg} alt="" width={100} height={100} />
            )}
        </>
    );
};

export default ProductPic;
