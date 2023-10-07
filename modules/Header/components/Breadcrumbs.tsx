import React, { FC } from 'react';
import Skeleton from 'react-loading-skeleton';
import { useDispatch } from 'react-redux';
import { IBreadcrumbs } from '../interfaces/IBreadcrumbs';
import { setMobileModalType } from '../../../redux/modalSlice/modalSlice';
import { switchMobileModalDisplay } from '../../../redux/stylesSlice/stylesSlice';
import { TLang } from '../../../models/types/TLang';
import { usePathname } from 'next/navigation';
import { useCurrentLocale } from '../../../locales/client';
import { useFetchAllIdQuery } from '../../../redux/services/navTree';

const Breadcrumbs: FC<IBreadcrumbs> = ({ styles }) => {
    const location = usePathname().split('/');
    const lang = useCurrentLocale() as TLang;
    const id = Number(location[2]);
    const { data, isFetching } = useFetchAllIdQuery(lang);
    const category = data?.flatTree[`${id}`];
    const dispatch = useDispatch();

    const handleOnClick = () => {
        document.body.style.overflow = 'hidden';
        dispatch(setMobileModalType('breadcrumbs'));
        dispatch(switchMobileModalDisplay());
    };

    if (isFetching) {
        return (
            <div className={styles.breadcrumbs}>
                <Skeleton containerClassName="skeleton" />
            </div>
        );
    }

    return (
        <div className={styles.breadcrumbs} onClick={handleOnClick}>
            <div className={styles.breadcrumbsName}>{category?.routes.at(-1)?.name}</div>
            <div className={styles.symbolLast}> &#9660;</div>
        </div>
    );
};

export default Breadcrumbs;
