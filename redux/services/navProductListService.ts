import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { INavProductListReq, INavProductListRes } from '../../models/interfaces/RTKQuery/INavProductList';

export const navProductListApi = createApi({
    reducerPath: 'navProductListApi',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.NEXT_PUBLIC_API_URL,
    }),
    endpoints: (build) => ({
        fetchProductList: build.query<INavProductListRes[], INavProductListReq>({
            query: ({ id, lang }) => ({
                url: '/navGoodsList',
                params: { id, lang },
            }),
        }),
    }),
});

export const { useFetchProductListQuery } = navProductListApi;
