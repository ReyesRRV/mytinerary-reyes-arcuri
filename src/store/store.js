import { configureStore } from "@reduxjs/toolkit";

import citiesApi from "./CitiesApi";

export const  store = configureStore({
    reducer: {
        cities: citiesApi,
        [citiesApi.reducerPath] : citiesApi.reducer
    },

})

