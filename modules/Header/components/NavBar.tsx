import React, { FC } from 'react';
import NavBarItem from './NavBarItem';
import ropeImg from '../../../public/assets/images/rope.png';
import starImg from '../../../public/assets/images/starFilled.svg';
import { routeConstants } from '../../../models/enums/EConstants';
import Cart from './Cart';
import Catalog from './Catalog';
import { INavBar } from '../interfaces/INavBar';

const NavBar: FC<INavBar> = ({ styles, t, location }) => {
    return (
        <div className={styles.navBar}>
            <Catalog styles={styles} location={location} t={t} />

            <NavBarItem
                styles={styles}
                route={routeConstants.CRIMPING_ROUTE}
                src={ropeImg}
                className={`${styles.navBar__item} ${styles.crimping}`}
                location={location}
            >
                {t('rope_crimping')}
            </NavBarItem>

            <NavBarItem
                styles={styles}
                route={routeConstants.FAVORITES_ROUTE}
                src={starImg}
                className={`${styles.navBar__item} ${styles.favorites}`}
                location={location}
            >
                {t('favorites')}
            </NavBarItem>

            <Cart location={location} t={t} />
        </div>
    );
};

export default NavBar;
