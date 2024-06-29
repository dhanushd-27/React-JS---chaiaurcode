import { configureStore } from "@reduxjs/toolkit"
import counterSlice from "../features/counter/counterSlice.js";
import {increment, decrement} from '../features/counter/counterSlice.js'
const store = configureStore({
    reducer: {
        counter: counterSlice,
    }
})

export default store;