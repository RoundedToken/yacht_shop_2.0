import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { INavTreeItem } from '../../models/interfaces/RTKQuery/INavTree';
import { TLang } from '../../models/types/TLang';

export const navTreeApi = createApi({
    reducerPath: 'navTreeApi',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.NEXT_PUBLIC_API_URL,
    }),
    endpoints: (build) => ({
        fetchAllId: build.query<INavTreeItem[], TLang>({
            query: (lang) => ({
                url: '/nav_tree',
                params: { lang },
            }),
        }),
    }),
});

export const { useFetchAllIdQuery } = navTreeApi;
