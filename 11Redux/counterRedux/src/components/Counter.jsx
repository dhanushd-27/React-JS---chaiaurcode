import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../features/counter/counterSlice.js';

function Counter() {
    const {count} = useSelector((state) => state.counter)
    const dispatch = useDispatch();

    return (
        <>
        <h1>Counter</h1>
        <div>{count}</div>
        <button onClick={() => {dispatch(increment())}}>Increment</button>
        <button onClick={() => {dispatch(decrement())}}>Decrement</button>
        </>
    )
}

export default Counter