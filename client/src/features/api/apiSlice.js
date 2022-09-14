import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { BASE_URL } from '../../utils/consts'

export const apiSlice = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: `${BASE_URL}/api` }),
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