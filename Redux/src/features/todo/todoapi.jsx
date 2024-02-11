import {createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const api=createApi({
    reducerPath:'api',
    baseQuery: fetchBaseQuery({baseUrl:"https://bknd-psi.vercel.app/api/v1/product"}),
    // tagTypes:["product"],
    endpoints:(builder)=>({
        getProduct:builder.query({
            query: ()=>'all',
            // providesTags:["product"]
                
        }),
        getLatest: builder.query({
            query:()=>"latest"
        })
    })
})
export const {useGetProductQuery, useGetLatestQuery} =api