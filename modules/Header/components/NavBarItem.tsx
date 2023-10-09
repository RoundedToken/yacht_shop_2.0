import React, { FC } from 'react';
import { routeConstants } from '../../../models/enums/EConstants';
import { INavBarItem } from '../interfaces/INavBarItem';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const NavBarItem: FC<INavBarItem> = ({ className, src, route, children, switcher, styles }) => {
    const location = '/' + usePathname().split('/')[2];
    const newRoute =
        location === routeConstants.CATEGORIES_ROUTE ||
        location === routeConstants.PRODUCT_LIST_ROUTE ||
        location === routeConstants.PRODUCT_ROUTE
            ? routeConstants.CATEGORIES_ROUTE
            : location;
    const isActive = newRoute === route;

    return (
        <div className={`${className} ${isActive ? styles.activeRoute : ''}`}>
            <Link href={route}>
                <Image src={src} alt="" width={50} height={50} />
            </Link>

            <Link href={route}>{children}</Link>

            {switcher}
        </div>
    );
};

export default NavBarItem;
