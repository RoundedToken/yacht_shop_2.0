import React, { FC } from 'react';
import faviconImg from '../../../../public/assets/images/favicon.png';
import lifebuoyImg from '../../../../public/assets/images/lifebuoy.svg';
import translationImg from '../../../../public/assets/images/translation.png';
import contactsImg from '../../../../public/assets/images/contacts.svg';
import { routeConstants } from '../../../models/enums/EConstants';
import { useDispatch } from 'react-redux';
import { IMobileMenu } from '../interfaces/IMobileMenu';
import PageTitle from '../../SearchBar/components/PageTitle';
import Breadcrumbs from './Breadcrumbs';
import { setMobileModalType } from '../../../redux/modalSlice/modalSlice';
import { switchMobileModalDisplay } from '../../../redux/stylesSlice/stylesSlice';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next-intl/client';

const MobileMenu: FC<IMobileMenu> = ({ styles }) => {
    const dispatch = useDispatch();
    const location = usePathname().split('/')[1];
    const breadcrumbsPaths = ['category', 'product_list', 'product'];

    const langOnClick = () => {
        document.body.style.overflow = 'hidden';
        dispatch(setMobileModalType('lang'));
        dispatch(switchMobileModalDisplay());
    };
    const searchOnClick = () => {
        document.body.style.overflow = 'hidden';
        dispatch(setMobileModalType('search'));
        dispatch(switchMobileModalDisplay());
    };
    return (
        <div className={styles._mobileMenu}>
            <Link className={styles.favicon} href={routeConstants.MAIN_ROUTE}>
                <Image src={faviconImg} alt="" height={50} width={50} />
            </Link>

            {breadcrumbsPaths.includes(location) ? <Breadcrumbs styles={styles} /> : <PageTitle styles={styles} />}

            <Image
                height={50}
                width={50}
                className={styles._mobileSearch}
                src={lifebuoyImg}
                alt=""
                onClick={searchOnClick}
            />

            <Image
                height={50}
                width={50}
                className={styles._mobileLang}
                src={translationImg}
                alt=""
                onClick={langOnClick}
            />

            <Link href={routeConstants.CONTACTS_ROUTE}>
                <Image height={50} width={50} className={styles._mobileContacts} src={contactsImg} alt="" />
            </Link>
        </div>
    );
};

export default MobileMenu;
