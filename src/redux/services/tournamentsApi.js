import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react' 

export const tournamentsApi = createApi({
    reducerPath : 'tournamentsApi',
    baseQuery   : fetchBaseQuery({
        baseUrl : 'http://localhost:3000'
    }),
    endpoints : (builder) => ({
        getTournaments : builder.query({
            query: (body) => ({
                url: `tournaments/all`,
                method: 'POST',
                body,
            }),
          })
    })
})

export const { useGetTournamentsQuery } = tournamentsApi