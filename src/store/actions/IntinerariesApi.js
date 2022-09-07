import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import apiurl from "../../api";

export const itinerariesAPI = createApi({
    reducerPath: "itinerariesAPI",
    baseQuery: fetchBaseQuery({
        baseUrl: apiurl
        }),
    endpoints: (builder)=>({
        getAllItineraries: builder.query({
            query: () => `/itineraries/`
            }),
        modifyItinerary: builder.mutation({
            query: (itinerary) =>({
            url: `/itineraries/${itinerary._id}`,
            method:'PATCH',
            body: itinerary
                })
            }),
        deleteItinerary: builder.mutation({
            query: (itinerary) =>({
                url: `/itineraries/${itinerary._id}`,
                method:'DELETE',
                body: itinerary
                })
            })
})})

export const {useGetAllItinerariesQuery,useDeleteItineraryMutation,useModifyItineraryMutation } = itinerariesAPI