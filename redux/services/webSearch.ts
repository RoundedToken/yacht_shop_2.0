import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { IWebSearchReq, IWebSearchRes } from '../../models/interfaces/RTKQuery/IWebSearch';

export const webSearchApi = createApi({
    reducerPath: 'webSearchApi',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.NEXT_PUBLIC_API_URL,
    }),
    endpoints: (build) => ({
        fetchProductList: build.query<IWebSearchRes[], IWebSearchReq>({
            query: ({ searchStr, lang }) => ({
                url: '/webSearch',
                params: { searchStr, lang },
            }),
        }),
    }),
});

export const { useFetchProductListQuery, useLazyFetchProductListQuery } = webSearchApi;
