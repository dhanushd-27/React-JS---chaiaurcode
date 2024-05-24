import { useState } from 'react'

function App() {

  function changeColor(event){
    var buttonId = event.target.id;
    var colors = {red: "rgb(220 38 38)", yellow: "rgb(250 204 21)", blue: "rgb(37 99 235)", green: "rgb(22 163 74)", black: "rgb(0 0 0)"}
    console.log(event.target.id);
    document.body.style.backgroundColor = colors[buttonId];
  }


  return (
    <>
      <div className='bg-white w-100% rounded-md p-1 px-2'>
        <button className='m-2 bg-red-600' onClick={changeColor} id='red'>Red</button>
        <button className='m-2 bg-blue-600' id='blue' onClick={changeColor}>Blue</button>
        <button className='m-2 bg-green-600'id='green' onClick={changeColor}>Green</button>
        <button className='m-2 bg-yellow-400'id='yellow' onClick={changeColor}>Yellow</button>
        <button className='m-2 bg-black'id='black' onClick={changeColor}>Black</button>
      </div>
    </>
  )
}

export default App
