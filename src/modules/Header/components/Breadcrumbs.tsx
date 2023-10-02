import React, { FC, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import { useDispatch, useSelector } from 'react-redux';
import { IBreadcrumbs } from '../interfaces/IBreadcrumbs';
import { usePathname } from 'next/navigation';
import { setMobileModalType } from '../../../redux/modalSlice/modalSlice';
import { switchMobileModalDisplay } from '../../../redux/stylesSlice/stylesSlice';
import { navProductApi } from '../../../redux/services/navProductService';
import { RootState } from '../../../redux/rootReducer';
import { useLocale } from 'next-intl';
import { TLang } from '../../../models/types/TLang';

const Breadcrumbs: FC<IBreadcrumbs> = ({ styles }) => {
    const location = usePathname().split('/');
    const isLocation = location[1] === 'product';
    const lang = useLocale() as TLang;
    const id = Number(location[2]);
    const [updateProduct, { data: product, isFetching }] = navProductApi.useLazyFetchProductQuery();
    const category = useSelector((state: RootState) => state.navSliceReducer.categoryList).find((category) =>
        isLocation ? category.id === product?.parentId : category.id === id,
    );
    const dispatch = useDispatch();

    useEffect(() => {
        if (isLocation) {
            updateProduct({ id, lang });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);

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
