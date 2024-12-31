import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://budget-tracker-api-mybm.onrender.com/api/' }),
    endpoints: (builder) => ({
        getCategories: builder.query({
            query: () => `expenses/categories`
        }),
        getPaymentModes:builder.query({
            query:()=>`expenses/payment-modes`
        }),
        getExpense: builder.query({
            query:()=>'expenses'
        })
    })
})

export const { useGetCategoriesQuery,useGetPaymentModesQuery,useGetExpenseQuery } = api