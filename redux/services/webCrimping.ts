import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { IWebCrimpingReq, IWebCrimpingRes } from '../../models/interfaces/RTKQuery/IWebCrimping';

export const webCrimpingApi = createApi({
    reducerPath: 'webCrimpingApi',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.NEXT_PUBLIC_API_URL,
    }),
    endpoints: (build) => ({
        fetchCrimping: build.query<IWebCrimpingRes[], IWebCrimpingReq>({
            query: ({ lang, diameter, length, end1, end2 }) => ({
                url: '/webCrimping',
                params: { lang, diameter, length, end1, end2 },
            }),
        }),
    }),
});

export const { useFetchCrimpingQuery, useLazyFetchCrimpingQuery } = webCrimpingApi;
