import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { IBreadcrumbsModal } from '../interfaces/IBreadrumbsModal';
import ModalHeader from './ModalHeader';
import { useLocation } from '../../../hooks/useLocation';
import { routeConstants } from '../../../models/enums/EConstants';
import { useCurrentLocale, useI18n } from '../../../locales/client';
import { useParam } from '../../../hooks/useParam';
import { useLazyFetchProductQuery } from '../../../redux/services/navProductService';
import { useFetchAllIdQuery } from '../../../redux/services/navTree';
import { switchMobileModalDisplay } from '../../../redux/stylesSlice/stylesSlice';
import Link from 'next/link';

const BreadcrumbsModal: FC<IBreadcrumbsModal> = ({ styles }) => {
    const location = useLocation();
    const isLocation = location === routeConstants.PRODUCT_ROUTE;
    const lang = useCurrentLocale();
    const id = useParam() ?? 0;
    const { data } = useFetchAllIdQuery(lang);
    const [updateProduct, { data: product }] = useLazyFetchProductQuery();
    const category = data?.flatTree[isLocation ? product?.parentId ?? 0 : +id];
    const dispatch = useDispatch();
    const t = useI18n();

    useEffect(() => {
        if (isLocation) {
            updateProduct({ id: +id, lang });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);

    const closeOnclick = () => {
        document.body.style.overflow = 'auto';
        dispatch(switchMobileModalDisplay());
    };

    return (
        <div className={styles.content}>
            <ModalHeader styles={styles} title={t('navigation')} />

            <div className={styles.itemsContainer}>
                {category?.routes.map((route) => (
                    <Link
                        key={route.id}
                        onClick={closeOnclick}
                        href={
                            route.hasChildren
                                ? routeConstants.CATEGORIES_ROUTE + `/${route.id}`
                                : routeConstants.PRODUCT_LIST_ROUTE + `/${route.id}`
                        }
                        className={styles.item}
                    >
                        {route.name}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default BreadcrumbsModal;
