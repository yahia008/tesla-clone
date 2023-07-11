import { configureStore } from "@reduxjs/toolkit";
import carReducer from "./cartSlice/carSlice";

export const Store = configureStore({
 
    reducer: {
        car: carReducer
    }

})