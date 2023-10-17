import React, { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import { IPicModal } from '../interfaces/IPicModal';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs, Zoom, Mousewheel } from 'swiper/modules';
import defaultProductImg from '../../../public/assets/images/defaultProduct.svg';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/zoom';
import { getModalPicSrc } from '../../../redux/modalSlice/selectors';
import OnImgErrorHOC from '../../../hooks/OnImgErrorHOC';

const PicModal: FC<IPicModal> = ({ styles }) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const picSrc = useSelector(getModalPicSrc);
    const picL = picSrc.length;

    return (
        <div className={styles.swiper}>
            <Swiper
                centeredSlides={true}
                centeredSlidesBounds={true}
                loop={true}
                navigation={true}
                zoom={true}
                mousewheel={true}
                //@ts-ignore
                thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                modules={[FreeMode, Navigation, Thumbs, Zoom, Mousewheel]}
                className={picL === 1 ? styles.singleSwiper : styles.topSwiper}
            >
                {picSrc.map((src, i) => (
                    <SwiperSlide className={styles.swiperSlide} key={i}>
                        <div className="swiper-zoom-container">
                            <OnImgErrorHOC src={src} defaultSrc={defaultProductImg} width={600} height={600} />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            {picL > 1 && (
                <Swiper
                    //@ts-ignore
                    onSwiper={setThumbsSwiper}
                    loop={true}
                    slidesPerView={4}
                    spaceBetween={20}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className={styles.bottomSwiper}
                >
                    {picSrc.map((src, i) => (
                        <SwiperSlide className={styles.swiperSlide} key={i}>
                            <OnImgErrorHOC src={src} defaultSrc={defaultProductImg} width={125} height={125} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            )}
        </div>
    );
};

export default PicModal;
