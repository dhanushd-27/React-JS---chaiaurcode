import './App.css'
import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  const [ jokes, setJokes ] = useState([]);

  useEffect(() => {
    axios.get('/api/jokes')
    .then((response) => {
      setJokes(response.data)
    })
    .catch((error) => {
      console.log(error);
    })
  }, [])

  return (
    <>
      <h1>Hello World</h1>
      <br />
      <br />

      <p>Jokes : { jokes.length }</p>

      <br />
      <br />

      {
        jokes.map((ele) => (
          <div key={ ele.id }>
            <h3>{ ele.title }</h3>
            <p>{ ele.content }</p>
          </div>
        ))
      }
    </>
  )
}

export default App