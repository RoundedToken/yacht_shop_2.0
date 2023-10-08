'use client';

import React, { ReactNode } from 'react';
import { Zoom } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const SwiperWrapper = ({ children, styles }: { children: ReactNode; styles: { readonly [key: string]: string } }) => {
    return (
        <Swiper modules={[Zoom]} zoom={true} className={styles.circleContainer}>
            <SwiperSlide>{children}</SwiperSlide>
        </Swiper>
    );
};

export default SwiperWrapper;
