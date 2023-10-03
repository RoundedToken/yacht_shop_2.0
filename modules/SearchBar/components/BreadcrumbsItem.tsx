import React, { FC } from 'react';
import { routeConstants } from '../../../models/enums/EConstants';
import { IBreadcrumbsItem } from '../interfaces/IBreadcrumbsItem';
import { useSelector } from 'react-redux';
import BreadcrumbsDropdown from './BreadcrumbsDropdown';
import arrowImg from '../../../public/assets/images/arrow.png';
import { RootState } from '../../../redux/rootReducer';
import Link from 'next/link';
import Image from 'next/image';

const BreadcrumbsItem: FC<IBreadcrumbsItem> = ({ styles, id, name, hasChildren }) => {
    const children = useSelector((state: RootState) => state.navSliceReducer.categoryList).find(
        (product) => product.id === id,
    )?.children;

    return (
        <>
            <div className={styles.breadcrumbsItem}>
                <Link
                    className={styles.breadcrumbsItemLink}
                    href={
                        hasChildren
                            ? routeConstants.CATEGORIES_ROUTE + `/${id}`
                            : routeConstants.PRODUCT_LIST_ROUTE + `/${id}`
                    }
                >
                    {name}
                </Link>

                {children && <BreadcrumbsDropdown styles={styles}>{children}</BreadcrumbsDropdown>}
            </div>

            {hasChildren && (
                <div className={styles.arrow}>
                    <Image src={arrowImg} alt="" width={25} height={25} />
                </div>
            )}
        </>
    );
};

export default BreadcrumbsItem;
