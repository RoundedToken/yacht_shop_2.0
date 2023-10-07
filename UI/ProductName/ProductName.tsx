import React, { FC } from 'react';
import { routeConstants } from '../../models/enums/EConstants';
import { IProductName } from './IProductName';
import styles from './ProductName.module.scss';
import Link from 'next/link';

const ProductName: FC<IProductName> = ({ id, name }) => {
    return (
        <Link className={styles.productName} href={routeConstants.PRODUCT_ROUTE + `/${id}`}>
            {name}
        </Link>
    );
};

export default ProductName;
