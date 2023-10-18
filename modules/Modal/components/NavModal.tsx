import React from 'react';
import QuickNav from '../../QuickNav/QuickNav';
import { useFetchAllIdQuery } from '../../../redux/services/navTree';
import { useCurrentLocale } from '../../../locales/client';
import { useSelector } from 'react-redux';
import { getIsModal } from '../../../redux/stylesSlice/selectors';
import Loader from '../../../UI/Loader/Loader';
import styles from '../Modal.module.scss';

const NavModal = () => {
    const isModal = useSelector(getIsModal);
    const lang = useCurrentLocale();
    const { data, isFetching } = useFetchAllIdQuery(lang);

    if (isFetching) {
        return <Loader className={styles.loader} />;
    }

    return isModal && data && <QuickNav data={data} />;
};

export default NavModal;
