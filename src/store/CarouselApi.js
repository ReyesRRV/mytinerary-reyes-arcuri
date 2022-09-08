import { createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const carouselApi = createApi({

    reducerPath: "carouselApi",

    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:4000" 
    }), 

    endpoints: (builder) =>({
        carousel:builder.query({                
            query: ()=> `/cities`

            ///// (nombre) : builder.query
            ///// (use)(Nombre)(Query)
        })
    })
})

export default carouselApi
export const {useCarouselQuery} = carouselApi
