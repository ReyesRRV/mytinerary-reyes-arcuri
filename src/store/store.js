import { configureStore } from "@reduxjs/toolkit";

import citiesApi from "./CitiesApi";
import carouselApi from "./CarouselApi"

export const  store = configureStore({
    reducer: {
        cities : citiesApi,
        [citiesApi.reducerPath] : citiesApi.reducer,
   
        carousel : carouselApi,
        [carouselApi.reducerPath] : carouselApi.reducer
    },
})

