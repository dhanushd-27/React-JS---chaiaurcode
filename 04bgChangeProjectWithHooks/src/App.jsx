import { useState } from 'react'

function App() {
  const [color, setColor] = useState('rgb(55, 55, 70)')

  return (
    <div className='w-screen h-screen flex justify-center items-end' style={{backgroundColor: color}}>
      <div className='bg-white px-3 py-2 rounded-full mb-10'>
        <button className='px-3 py-1 rounded-full mx-1' style={{backgroundColor: "red"}}  onClick={() => setColor("red")}>Red</button>
        <button className='px-3 py-1 rounded-full mx-1' style={{backgroundColor: "green"}} onClick={() => setColor("green")}>Green</button>
        <button className='px-3 py-1 rounded-full mx-1' style={{backgroundColor: "blue"}} onClick={() => setColor("blue")}>Blue</button>
        <button className='px-3 py-1 rounded-full mx-1' style={{backgroundColor: "black"}} onClick={() => setColor("black")}>Black</button>
      </div>
    </div>
  )
}

export default App
