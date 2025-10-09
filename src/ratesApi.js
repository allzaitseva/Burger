import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const ratesApi = createApi({
    reducerPath: 'ratesApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.frankfurter.app/' }),
    endpoints: (builder) => ({
        getRates: builder.query({
            query: () => 'latest?from=EUR&to=CZK',
        }),
    }),
});


export const { useGetRatesQuery } = ratesApi;

const KEY = "rate_eur_czk";
const TTL_MS = 60 * 60 * 1000;

export async function getEurToCzk() {
    try {
        const cached = JSON.parse(localStorage.getItem(KEY) || "null");
        if (cached && (Date.now() - cached.ts) < TTL_MS) return cached.rate;

        const res = await fetch("https://api.frankfurter.app/latest?from=EUR&to=CZK");
        if (!res.ok) throw new Error("rate fetch failed");
        const data = await res.json();
        let rate = data?.rates?.CZK;
        if (typeof rate !== "number" || isNaN(rate)) throw new Error("bad payload");
        rate = Math.ceil(rate);
        localStorage.setItem(KEY, JSON.stringify({ rate, ts: Date.now() }));
        return rate;
    } catch (e) {
        console.error("EUR→CZK rate error:", e);
        return null;
    }
}