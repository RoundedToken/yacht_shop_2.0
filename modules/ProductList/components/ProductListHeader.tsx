import React from 'react';
import { useI18n } from '../../../locales/client';

const ProductListHeader = () => {
    const t = useI18n();

    return (
        <thead>
            <tr>
                <th>{t('product')}</th>

                <th>{t('brand')}</th>

                <th>{t('code')}</th>

                <th>{t('in_stock')}</th>

                <th>{t('price')}</th>

                <th></th>
            </tr>
        </thead>
    );
};

export default ProductListHeader;
