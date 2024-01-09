// ab ye slice createapi ke name ki ik chez se bane ga 


// what is createApi?


import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'




// Define a service using a base URL and expected endpoints
export const adminApi = createApi({
    // slice me ham ese likhty thy name: "account"
    reducerPath: 'admin',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8081/' }),
    endpoints: (builder) => ({
        // jo be name ap yaha do ge is name ka hook bane ga
        // jese yaha getAccounts diya hai
        getAccounts: builder.query({
            query: () => `accounts`,
            // ab catching ko remove krne ke leye yaha aye hain 
            providesTags: ["accounts"],
            // for sorting
            // transformResponse: (response)=>response.sort((a,b)=>b.id-a.id),
            transformResponse: (response)=>response.sort((a,b)=>b.amount-a.amount),
            // is ko ascending decending be kr skty hai
        }),
        // kisa ka new account add krna ho to 
        // mutation ka mtlb yaha data change hoga api se post delete put ye sab mutation hain
        // lekin bs get he query hai
        addAccounts: builder.mutation({
            // yaha query ke agy 1 object dena hai lekin ab direct {} to ye function ki
            // body samjh leta hai to is ke sath () laga den
            // query: () => ({}),
            query: (amount, id) => ({
                url: "accounts",
                method: "POST",
                // ab body me data bhejna hai kyoke kuch add krna hai to data
                // to bhejna prna hai
                // to me ye keta ke hun ke me is query me call kr donga amount or id  
                // jaha hook call krenge waha ye data jaye ga

                body: { amount, id }
            }),

            // caching ko remove krne ke leye
            invalidatesTags: ["accounts"]
        }),

        deleteAccounts: builder.mutation({
            query: (id) => ({
                url: `accounts/${id}`,
                method: "DELETE",
            }),
            // caching ko remove krne ke leye
            invalidatesTags: ["accounts"]
        }),


        updateAccounts: builder.mutation({
            // is me 1 he object me id or amount bhejne hai bs ye yaad rkhna
            query: ({id, amount}) => ({
                url: `accounts/${id}`,
                method: "PATCH",
                body: {amount}
            }),
            // caching ko remove krne ke leye
            invalidatesTags: ["accounts"]
        }),

    }),

})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
//   custom hooks jo apny ap banty hain
// useGetAccountsQuery ye 1 hook ban gya hai ab ap ise use kr skty hain kahin pe be
// me ise admin me use krta hun
export const { useGetAccountsQuery, useAddAccountsMutation, useDeleteAccountsMutation, useUpdateAccountsMutation } = adminApi