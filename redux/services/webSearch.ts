import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { IWebSearchReq, IWebSearchRes } from '../../models/interfaces/RTKQuery/IWebSearch';

export const webSearchApi = createApi({
    reducerPath: 'webSearchApi',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.REACT_APP_SERVER_URL,
    }),
    endpoints: (build) => ({
        fetchProductList: build.query<IWebSearchRes[], IWebSearchReq>({
            query: ({ searchStr, lang }) => ({
                url: '/web_search',
                params: { searchStr, lang },
            }),
        }),
    }),
});

export const { useFetchProductListQuery } = webSearchApi;
