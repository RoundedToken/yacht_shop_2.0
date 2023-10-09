'use client';

import React, { ReactNode } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

const AutoSwiper = ({
    img1,
    img2,
    img3,
    img4,
    styles,
}: {
    styles: { readonly [key: string]: string };
    img1: ReactNode;
    img2: ReactNode;
    img3: ReactNode;
    img4: ReactNode;
}) => {
    return (
        <Swiper
            loop={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className={styles.swiper}
        >
            <SwiperSlide className={styles.swiperSlide}>{img1}</SwiperSlide>

            <SwiperSlide className={styles.swiperSlide}>{img2}</SwiperSlide>

            <SwiperSlide className={styles.swiperSlide}>{img3}</SwiperSlide>

            <SwiperSlide className={styles.swiperSlide}>{img4}</SwiperSlide>
        </Swiper>
    );
};

export default AutoSwiper;
