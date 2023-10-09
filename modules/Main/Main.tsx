import React from 'react';
import styles from './Main.module.scss';
import SingleNews from './components/SingleNews';
import topImg from '../../public/assets/images/mainTopImg.jpg';
import AutoSwiper from './components/AutoSwiper';
import bottomImg from '../../public/assets/images/mainBottomImg.jpg';
import bellImg from '../../public/assets/images/bell.jpg';
import wheelImg from '../../public/assets/images/wheel.jpg';
import NewsImg from './components/NewsImg';
import newsImg2 from '../../public/assets/images/newsImg2.jpg';
import newsImg3 from '../../public/assets/images/newsImg3.jpg';
import newsImg1 from '../../public/assets/images/newImg1.jpg';
import img1 from '../../public/assets/images/swiperImg1.jpg';
import img2 from '../../public/assets/images/swiperImg2.jpg';
import img3 from '../../public/assets/images/swiperImg3.jpg';
import img4 from '../../public/assets/images/swiperImg4.jpg';
import Image from 'next/image';
import News from './components/News';

const Main = () => {
    return (
        <div className={styles.root}>
            <div className={styles.leftContainer}>
                <NewsImg styles={styles} src={newsImg1} />

                <SingleNews index={0} styles={styles} />

                <NewsImg styles={styles} src={newsImg2} />

                <SingleNews index={1} styles={styles} />

                <NewsImg styles={styles} src={newsImg3} />

                <News styles={styles} />
            </div>

            <div className={styles.content}>
                <div className={styles.topImg}>
                    <Image src={topImg} alt="" priority width={800} height={550} />
                </div>

                <div className={styles.swiperContainer}>
                    <AutoSwiper
                        styles={styles}
                        img1={<Image src={img1} alt="" width={475} height={392} />}
                        img2={<Image src={img2} alt="" width={475} height={392} />}
                        img3={<Image src={img3} alt="" width={475} height={392} />}
                        img4={<Image src={img4} alt="" width={475} height={392} />}
                    />
                </div>

                <div className={styles.bottomImg}>
                    <Image src={bottomImg} alt="" width={742} height={498} />
                </div>

                <div className={styles.bellImg}>
                    <Image src={bellImg} alt="" width={484} height={484} />
                </div>

                <div className={styles.wheelImg}>
                    <Image src={wheelImg} alt="" width={500} height={500} />
                </div>

                <div className={styles.glovesImg}>
                    <Image src={img3} alt="" width={475} height={392} />
                </div>

                <div className={styles.colorsImg}>
                    <Image src={img2} alt="" width={583} height={392} />
                </div>
            </div>
        </div>
    );
};

export default Main;
