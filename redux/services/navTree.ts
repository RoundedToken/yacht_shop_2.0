import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { INavTreeItem } from '../../models/interfaces/RTKQuery/INavTree';
import { TLang } from '../../models/types/TLang';

export const navTreeApi = createApi({
    reducerPath: 'navTreeApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3000/api',
    }),
    endpoints: (build) => ({
        fetchAllId: build.query<{ tree: INavTreeItem[]; flatTree: Record<string, INavTreeItem> }, TLang>({
            query: (lang) => ({
                url: '/navTree',
                params: { lang },
            }),
        }),
    }),
});

export const { useFetchAllIdQuery } = navTreeApi;
