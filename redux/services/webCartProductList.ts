import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { IWebCartProductListReq, IWebCartProductListRes } from '../../models/interfaces/RTKQuery/IWebCartProductList';

export const webCartProductList = createApi({
    reducerPath: 'webCartProductListApi',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.NEXT_PUBLIC_API_URL,
    }),
    endpoints: (build) => ({
        fetchCartProductList: build.query<IWebCartProductListRes[], IWebCartProductListReq>({
            query: ({ idList, lang }) => ({
                url: '/webCartProductList',
                params: { idList, lang },
            }),
        }),
    }),
});

export const { useLazyFetchCartProductListQuery, useFetchCartProductListQuery } = webCartProductList;
