import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { INavProductListReq, INavProductListRes } from '../../models/interfaces/RTKQuery/INavProductList';

export const webRelatedProductsApi = createApi({
    reducerPath: 'webRelatedProductsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.NEXT_PUBLIC_API_URL,
    }),
    endpoints: (build) => ({
        fetchRelatedProducts: build.query<INavProductListRes[], INavProductListReq>({
            query: ({ id, lang }) => ({
                url: '/webRelatedProducts',
                params: { id, lang },
            }),
        }),
    }),
});

export const { useFetchRelatedProductsQuery } = webRelatedProductsApi;
