import React, { FC } from 'react';
import { routeConstants } from '../../../models/enums/EConstants';
import { IPrice } from '../interfaces/IPrice';
import { usePathname } from 'next/navigation';
import { getEurPrice } from '../../../utils/getEurPrice';

const Price: FC<IPrice> = ({ styles, count, price }) => {
    const isCartLocation = '/' + usePathname().split('/')[2] === routeConstants.CART_ROUTE;
    const fullPrice = isCartLocation ? price * count : price;

    return (
        <div className={styles.price}>
            <div className={styles.price__full}>{getEurPrice(fullPrice)}</div>

            <div
                style={isCartLocation ? {} : { display: 'none' }}
                className={styles.price__single}
            >{`${count} x ${getEurPrice(price)}`}</div>
        </div>
    );
};

export default Price;
