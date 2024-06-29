import { useSelector } from "react-redux"
import './App.css'
import Counter from "./components/Counter.jsx"

function App() {
  const count = useSelector(state => {state})
  return (
    <>
      <Counter/>
    </>
  )
}

export default App
