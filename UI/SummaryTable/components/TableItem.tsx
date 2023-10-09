import React, { FC } from 'react';
import { ITableItem } from '../interfaces/ITableItem';
import { getEurPrice } from '../../../utils/getEurPrice';

const TableItem: FC<ITableItem> = ({ index, product }) => {
    return (
        <tr>
            <td>{index + 1}</td>

            <td>{product.name}</td>

            <td>{product.code}</td>

            <td>{getEurPrice(product.price)}</td>

            <td>{product.count}</td>

            <td>{getEurPrice(product.count * product.price)}</td>
        </tr>
    );
};

export default TableItem;
