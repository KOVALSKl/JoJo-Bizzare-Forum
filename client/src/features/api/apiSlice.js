import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const apiSlice = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api' }),
    endpoints: builder => ({
        getNews: builder.query({
            query: ({ offset, limit }) => `/news?offset=${offset}&limit=${limit}`
        }),
        getSingleNews: builder.query({
            query: newsID => `/news/${newsID}`
        }),
    })

})

export const { useGetNewsQuery, useGetSingleNewsQuery } = apiSlice