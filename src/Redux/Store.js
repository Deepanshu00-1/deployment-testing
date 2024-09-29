import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "./counter/counterSlice"
import booleanReducer from "./counter/booleanSlice"
import cartReducer from "./counter/booleanSlice"

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        boolean: booleanReducer,
        cart: cartReducer,
    },
})