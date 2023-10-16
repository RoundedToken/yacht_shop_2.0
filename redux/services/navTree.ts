import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { INavTreeItem } from '../../models/interfaces/RTKQuery/INavTree';
import { TLang } from '../../models/types/TLang';
import { TCategories } from '../categoriesSlice/categoriesSlice';

export const navTreeApi = createApi({
    reducerPath: 'navTreeApi',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.NEXT_PUBLIC_API_URL,
    }),
    endpoints: (build) => ({
        fetchAllId: build.query<{ tree: INavTreeItem[]; flatTree: TCategories }, TLang>({
            query: (lang) => ({
                url: '/navTree',
                params: { lang },
            }),
        }),
    }),
});

export const { useFetchAllIdQuery } = navTreeApi;
