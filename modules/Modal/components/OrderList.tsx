import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import SummaryTable from '../../../UI/SummaryTable/SummaryTable';
import { getCartIdList, getCartProductList } from '../../../redux/cartSlice/selectors';
import { useCurrentLocale } from '../../../locales/client';
import { useFetchCartProductListQuery } from '../../../redux/services/webCartProductList';
import Loader from '../../../UI/Loader/Loader';

const OrderList = () => {
    const cartList = useSelector(getCartProductList);
    const idList = useSelector(getCartIdList);
    const lang = useCurrentLocale();
    const { data, isFetching, error } = useFetchCartProductListQuery({
        idList,
        lang,
    });

    if (isFetching) {
        return <Loader />;
    }
    if (error) {
        return <h1>Error!</h1>;
    }

    return (
        <>
            {data && (
                <SummaryTable
                    list={data.map((product) => {
                        return {
                            id: product.id,
                            name: product.name,
                            code: product.code,
                            price: product.price,
                            count: cartList.find((p) => p.id === product.id)?.count as number,
                        };
                    })}
                />
            )}
        </>
    );
};

export default OrderList;
