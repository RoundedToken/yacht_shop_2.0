import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { INavProductReq, INavProductRes } from '../../models/interfaces/RTKQuery/INavProduct';

export const navProductApi = createApi({
    reducerPath: 'navProductApi',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.NEXT_PUBLIC_API_URL,
    }),
    endpoints: (build) => ({
        fetchProduct: build.query<INavProductRes, INavProductReq>({
            query: ({ id, lang }) => ({
                url: '/navShowTovar',
                params: { id, lang },
            }),
        }),
    }),
});

export const { useFetchProductQuery, useLazyFetchProductQuery } = navProductApi;
