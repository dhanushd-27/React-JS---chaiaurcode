import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0,
}

const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        increment: (state = {initialState}, action) => {
            state += 1;
        },
        decrement: (state = {initialState}, action) => {
            state -= 1;
        }
    }
})

export default todoSlice.reducer;