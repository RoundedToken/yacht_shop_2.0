import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import React from 'react';

const NewsImg = ({ styles, src }: { styles: { readonly [key: string]: string }; src: string | StaticImport }) => {
    return (
        <div className={styles.imageContainer}>
            <div className={styles.mask} />

            <div className={styles.imgSymbol}>&#9679;</div>

            <Image src={src} alt="" width={118} height={118} />
        </div>
    );
};

export default NewsImg;
