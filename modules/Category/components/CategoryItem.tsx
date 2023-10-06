import React, { FC, useState } from 'react';
import { ICategoryItem } from '../interfaces/ICategoryItem';
import { routeConstants } from '../../../models/enums/EConstants';
import categoryDefaultImg from '../../../public/assets/images/categoryDefault.png';
import Link from 'next/link';
import Image from 'next/image';

const CategoryItem: FC<ICategoryItem> = ({ id, children, hasChildren, styles, src }) => {
    const [isImgError, setIsImgError] = useState(false);

    return (
        <Link
            className={styles.categoryItem}
            href={
                hasChildren ? routeConstants.CATEGORIES_ROUTE + `/${id}` : routeConstants.PRODUCT_LIST_ROUTE + `/${id}`
            }
        >
            <div className={styles.imageContainer}>
                <div className={styles.mask} />

                {!isImgError && <Image src={src} alt="" onError={() => setIsImgError(true)} width={120} height={120} />}

                {isImgError && (
                    <Image
                        className={styles.defaultProductPic}
                        src={categoryDefaultImg}
                        alt=""
                        width={120}
                        height={120}
                    />
                )}
            </div>
            {children}
        </Link>
    );
};

export default CategoryItem;
