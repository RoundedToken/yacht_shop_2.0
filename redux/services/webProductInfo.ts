import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { IWebProductInfoReq } from '../../models/interfaces/RTKQuery/IWebProductInfo';

export const webProductInfoApi = createApi({
    reducerPath: 'webProductInfoApi',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.NEXT_PUBLIC_API_URL,
    }),
    endpoints: (build) => ({
        fetchProductInfo: build.query<{ description?: string; props: string[][] }, IWebProductInfoReq>({
            query: ({ id }) => ({
                url: '/webTovarParameters',
                params: { id },
            }),
        }),
    }),
});

export const { useFetchProductInfoQuery } = webProductInfoApi;
