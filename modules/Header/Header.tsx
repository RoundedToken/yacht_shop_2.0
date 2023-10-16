import React from 'react';
import styles from './Header.module.scss';
import { routeConstants } from '../../models/enums/EConstants';
import Name from './components/Name';
import NavBarItem from './components/NavBarItem';
import NavBar from './components/NavBar';
import MobileMenu from './components/MobileMenu';
import HeaderWrapper from './HeaderWrapper';
import contactsImg from '../../public/assets/images/contacts.svg';
import { TGetI18n } from '../../locales/server';

const Header = ({ t, location, searchStr = '' }: { t: TGetI18n; location: string; searchStr?: string }) => {
    return (
        <>
            <HeaderWrapper navbar={<NavBar styles={styles} t={t} location={location} />}>
                <MobileMenu location={location} styles={styles} t={t} searchStr={searchStr} />

                <Name styles={styles} t={t} />

                <NavBarItem
                    styles={styles}
                    route={routeConstants.CONTACTS_ROUTE}
                    src={contactsImg}
                    className={styles.contacts}
                    location={location}
                >
                    {t('contacts')}
                </NavBarItem>
            </HeaderWrapper>
        </>
    );
};

export default Header;
