import './App.css'
import Card from './components/Card.jsx'
function App() {

  return (
    <>
    <h1 className='mb-4'>Orca</h1>
      <Card username="Dhanush" role="Web developer" origin="Vishakapatnam"/>
      <Card username="Orca" role="Game developer" origin="Breeze"/>
    </>
  )
}

export default App
