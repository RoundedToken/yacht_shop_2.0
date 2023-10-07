import React, { FC } from 'react';
import { routeConstants } from '../../../models/enums/EConstants';
import { IMobilePrice } from '../interfaces/IMobilePrice';
import { usePathname } from 'next/navigation';
import { getEurPrice } from '../../../utils/getEurPrice';

const MobilePrice: FC<IMobilePrice> = ({ styles, count, price }) => {
    const isCartLocation = '/' + usePathname().split('/')[2] === routeConstants.CART_ROUTE;
    const fullPrice = isCartLocation ? price * count : price;

    return (
        <div className={styles._mobilePrice}>
            <div className={styles._mobilePrice__full}>{getEurPrice(fullPrice)}</div>

            <div
                style={isCartLocation ? {} : { display: 'none' }}
                className={styles._mobilePrice__single}
            >{`${count} x ${getEurPrice(price)}`}</div>
        </div>
    );
};

export default MobilePrice;
