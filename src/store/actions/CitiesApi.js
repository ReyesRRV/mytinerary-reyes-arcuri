import { createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const citiesApi = createApi({

    reducerPath: "citiesApi",

    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:4000" 
    }), 

    endpoints: (builder) =>({
        all:builder.query({
            query: (search)=> `/cities/?name=${search}`
        })
    })
})


export default citiesApi
export const {useAllQuery} = citiesApi








// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
// // import apiurl from "../../api";
// const apiurl = "http://localhost:4000" 


// export const citiesAPI = createApi({
//     reducerPath: "citiesAPI",
//     baseQuery: fetchBaseQuery({
//         baseUrl: apiurl
//     }),
//     endpoints: (builder) => ({
//         getAllCities: builder.query({
//             query: (search)=>`/cities/?city=${search}`
//             }),
//         postOneCity: builder.mutation({
//             query: (data) => ({
//                 url: "/cities/",
//                 method: "POST",
//                 body: data,
//                 responseHandler: (res)=> res.body.response
//             })
//             }),
//         editOneCity: builder.mutation({
//             query: ({id,data}) => ({
//                 url: `/cities/${id}`,
//                 method: "PUT",
//                 body: data,
//                 responseHandler: (res)=> res.body.response
//                 })
//         }),
//         getOneCity: builder.query({
//             query: (id)=>`/cities/${id}`
//         }),
//         getACity: builder.mutation({
//             query: (id)=>`/cities/${id}`
//         }),
//     })
// })

// export const {
//     useGetAllCitiesQuery,
//     usePostOneCityMutation,
//     useEditOneCityMutation,
//     useGetOneCityQuery,
//     useGetACityMutation} = citiesAPI