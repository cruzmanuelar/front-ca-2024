import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react' 

export const selectionsApi = createApi({
    reducerPath : 'selectionsApi',
    baseQuery   : fetchBaseQuery({
        baseUrl : 'http://localhost:3000'
    }),
    endpoints : (builder) => ({
        getTournaments : builder.query({
            query: (body) => ({
                url: `selections/all`,
                method: 'POST',
                body,
            }),
          })
    })
})

export const { useGetSelectionsQuery } = selectionsApi