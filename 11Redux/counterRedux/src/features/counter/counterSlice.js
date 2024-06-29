import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0,
}

const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        increment: (state = {initialState}) => {
            state.count += 1;
        },
        decrement: (state = {initialState}) => {
            state.count -= 1;
        }
    }
})

export const {increment, decrement} = todoSlice.actions;
export default todoSlice.reducer;