import React, { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useDispatch } from 'react-redux';
import { IProductSwiper } from '../interfaces/IProductSwiper';
import defaultProductImg from '../../../public/assets/images/defaultProduct.svg';
import { setModalType, setPicSrc } from '../../../redux/modalSlice/modalSlice';
import { switchModalDisplay } from '../../../redux/stylesSlice/stylesSlice';
import { FreeMode, Navigation, Pagination } from 'swiper/modules';
import OnImgErrorHOC from '../../../hooks/OnImgErrorHOC';

const ProductSwiper: FC<IProductSwiper> = ({ picSrc, styles }) => {
    const dispatch = useDispatch();

    const fullScreenOnClick = () => {
        dispatch(setPicSrc(picSrc));
        dispatch(setModalType('pic'));
        dispatch(switchModalDisplay());
        document.body.style.overflow = 'hidden';
    };

    return (
        <div className={styles.image}>
            <Swiper
                style={{
                    //@ts-ignore
                    '--swiper-navigation-size': '30px',
                }}
                navigation={true}
                mousewheel={true}
                loop={true}
                pagination={true}
                modules={[FreeMode, Navigation, Pagination]}
                className={styles.swiper}
            >
                {picSrc.map((src, i) => (
                    <SwiperSlide className={styles.swiperSlide} key={i}>
                        <OnImgErrorHOC
                            src={src}
                            defaultSrc={defaultProductImg}
                            defaultClassName={styles.defaultProductPic}
                            onClick={fullScreenOnClick}
                            width={323}
                            height={257}
                            priority
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default ProductSwiper;
