import React, { FC } from 'react';
import ModalHeader from './ModalHeader';
import Filter from '../../Filter/Filter';
import Sorting from '../../Sorting/Sorting';
import BrandSelect from '../../BrandSelect/BrandSelect';
import { routeConstants } from '../../../models/enums/EConstants';
import { useLocation } from '../../../hooks/useLocation';
import { useI18n } from '../../../locales/client';

export interface IFilterModal {
    styles: {
        readonly [key: string]: string;
    };
}

const FilterModal: FC<IFilterModal> = ({ styles }) => {
    const location = useLocation();
    const t = useI18n();
    const filterTitle = t('filter');
    const brandsTitle = t('brands');
    const sortingTitle = t('sorting');

    return (
        <div className={styles.content}>
            <ModalHeader styles={styles} title={t('filters')} />

            {(routeConstants.PRODUCT_LIST_ROUTE === location ||
                routeConstants.CART_ROUTE === location ||
                routeConstants.SEARCH_ROUTE === location ||
                routeConstants.FAVORITES_ROUTE === location) && (
                <>
                    <Filter title={filterTitle} />

                    <hr />
                </>
            )}

            {(routeConstants.CATEGORIES_ROUTE === location ||
                routeConstants.PRODUCT_LIST_ROUTE === location ||
                routeConstants.SEARCH_ROUTE === location ||
                routeConstants.CART_ROUTE === location ||
                routeConstants.FAVORITES_ROUTE === location) && (
                <>
                    <Sorting title={sortingTitle} />

                    <hr />
                    <BrandSelect title={brandsTitle} />
                </>
            )}
        </div>
    );
};

export default FilterModal;
