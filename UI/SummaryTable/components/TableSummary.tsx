import React, { FC } from 'react';
import { ITableSummary } from '../interfaces/ITableSummary';
import { getEurPrice } from '../../../utils/getEurPrice';
import { useI18n } from '../../../locales/client';

const TableSummary: FC<ITableSummary> = ({ totalSum }) => {
    const t = useI18n();

    return (
        <tr>
            <td></td>

            <td></td>

            <td></td>

            <td></td>

            <td>{t('total')}:</td>

            <td>{getEurPrice(totalSum)}</td>
        </tr>
    );
};

export default TableSummary;
