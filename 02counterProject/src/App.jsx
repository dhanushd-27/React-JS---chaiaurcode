import { useState } from 'react'
import './App.css'

function App() {
  //Monitors the assigned variable
  let [counter, setCounter] = useState(0);
  
  let addValue = () => {
    if(counter < 20){
      setCounter(counter + 1);
    }
  }
  let subValue = () => {
    if(counter > 0){
      setCounter(counter - 1);
    }
  }
  return (
    <>
      <h1>Hello buddy</h1>
      <h2>This is Orca</h2>

      <p>The counter changes when you click the below button: {counter}</p>
      
      <br/>
      <br/>
      <br/>

      <button onClick={ addValue }>Add Value {counter}</button>
      <br/>
      <br/>
      <br/>
      <button onClick={ subValue }>Sub Value {counter}</button>
    </>
  )
}

export default App
