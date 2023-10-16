import React, { FC } from 'react';
import faviconImg from '../../../public/assets/images/favicon.png';
import contactsImg from '../../../public/assets/images/contacts.svg';
import { routeConstants } from '../../../models/enums/EConstants';
import { IMobileMenu } from '../interfaces/IMobileMenu';
import PageTitle from '../../SearchBar/components/PageTitle';
import Breadcrumbs from './Breadcrumbs';
import Link from 'next/link';
import Image from 'next/image';
import MobileModalButton from './MobileModalButton';

const MobileMenu: FC<IMobileMenu> = ({ styles, location, t, searchStr }) => {
    const breadcrumbsPaths = ['category', 'product_list', 'product'];

    return (
        <div className={styles._mobileMenu}>
            <Link className={styles.favicon} href={routeConstants.MAIN_ROUTE}>
                <Image src={faviconImg} alt="" height={50} width={50} />
            </Link>

            {breadcrumbsPaths.includes(location) ? (
                <Breadcrumbs styles={styles} />
            ) : (
                <PageTitle styles={styles} location={location} t={t} searchStr={decodeURI(searchStr)} />
            )}

            <MobileModalButton />

            <Link href={routeConstants.CONTACTS_ROUTE}>
                <Image height={50} width={50} className={styles._mobileContacts} src={contactsImg} alt="" />
            </Link>
        </div>
    );
};

export default MobileMenu;
