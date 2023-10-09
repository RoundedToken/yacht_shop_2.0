import React from 'react';
import { useI18n } from '../../../locales/client';

const TableHeader = () => {
    const t = useI18n();

    return (
        <thead>
            <tr>
                <th>№</th>

                <th>{t('product')}</th>

                <th>{t('code')}</th>

                <th>{t('price')}</th>

                <th>{t('amount')}</th>

                <th>{t('total')}</th>
            </tr>
        </thead>
    );
};

export default TableHeader;
