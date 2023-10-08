'use client';

import React, { ReactNode, useEffect } from 'react';
import styles from './MainWrapper.module.scss';
import { routeConstants } from '../../models/enums/EConstants';
import { usePathname } from 'next/navigation';
import { useSelector } from 'react-redux';
import { getListMode } from '../../redux/sideBarSlice/selectors';

const MainWrapper = ({ children }: { children: ReactNode }) => {
    const pathname = usePathname();
    const location = '/' + pathname.split('/')[2];
    const displayMode = useSelector(getListMode);

    //Scroll to top
    useEffect(() => {
        if (typeof document !== 'undefined') {
            document.documentElement.scrollTo({
                top: 0,
                left: 0,
            });
        }
    }, [pathname]);

    return (
        <div
            className={styles.wrapper}
            style={
                location === routeConstants.CART_ROUTE
                    ? { backgroundColor: 'rgb(211, 240, 243)' }
                    : location === routeConstants.FAVORITES_ROUTE
                    ? { backgroundColor: 'rgb(252, 248, 211	)' }
                    : location === routeConstants.MAIN_ROUTE ||
                      location === routeConstants.CRIMPING_ROUTE ||
                      location === routeConstants.PRODUCT_ROUTE ||
                      location === routeConstants.CONTACTS_ROUTE ||
                      (location === routeConstants.PRODUCT_LIST_ROUTE && displayMode === 'table')
                    ? { backgroundColor: 'white' }
                    : {}
            }
        >
            {children}
        </div>
    );
};

export default MainWrapper;
