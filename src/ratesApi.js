import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const ratesApi = createApi({
    reducerPath: 'ratesApi',
    baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
    endpoints: (b) => ({
        getRates: b.query({
            query: () => 'rates', // { USD:1, EUR:0.92, CZK:23.4, ... }
        }),
    }),
});

export const { useGetRatesQuery } = ratesApi;
