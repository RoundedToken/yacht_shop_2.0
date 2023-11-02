import React, { useEffect } from 'react';
import QuickNav from '../../QuickNav/QuickNav';
import { useFetchAllIdQuery } from '../../../redux/services/navTree';
import { useCurrentLocale } from '../../../locales/client';
import { useDispatch, useSelector } from 'react-redux';
import { getIsModal } from '../../../redux/stylesSlice/selectors';
import Loader from '../../../UI/Loader/Loader';
import styles from '../Modal.module.scss';
import { getModalType } from '../../../redux/modalSlice/selectors';
import { setCategories } from '../../../redux/categoriesSlice/categoriesSlice';

const NavModal = () => {
    const isModal = useSelector(getIsModal);
    const isNav = useSelector(getModalType) === 'nav';
    const lang = useCurrentLocale();
    const { data, isFetching } = useFetchAllIdQuery(lang);
    const dispatch = useDispatch();

    useEffect(() => {
        if (data) {
            dispatch(setCategories(data.flatTree));
        }
    }, [data, dispatch]);

    if (isFetching) {
        return <Loader className={styles.loader} />;
    }

    return isModal && data && isNav && <QuickNav data={data} />;
};

export default NavModal;
