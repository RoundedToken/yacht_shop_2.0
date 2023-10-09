import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { IWebNewsRes } from '../../models/interfaces/RTKQuery/IWebNews';
import { TLang } from '../../models/types/TLang';

export const webNewsApi = createApi({
    reducerPath: 'webNewsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.NEXT_PUBLIC_API_URL,
    }),
    endpoints: (build) => ({
        fetchNews: build.query<IWebNewsRes[], TLang>({
            query: (lang) => ({
                url: '/webNews',
                params: { lang },
            }),
        }),
    }),
});

export const { useFetchNewsQuery } = webNewsApi;
