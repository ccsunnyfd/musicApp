import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3000/api',
        // baseUrl: 'https://shazam-core7.p.rapidapi.com',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', process.env.NEXT_PUBLIC_SHAZAM_CORE_RAPID_API_KEY)
            return headers
        }
    }),
    endpoints: (builder) => ({
        // getTopCharts: builder.query({ query: () => '/songs/list-recommendations?id=293401556' }),
        getTopCharts: builder.query({ query: () => '/charts/get-top-charts' }),
    }),
})

export const {
    useGetTopChartsQuery,
} = shazamCoreApi