import "./App.css"
import React from "react"
import UserContextProvider from "./context/UserContextProvider.jsx"
import Login from "./components/Login.jsx"
import Public from "./components/Public.jsx"


function App() {

  return (
    <UserContextProvider>
      <Login />
      <Public />
    </UserContextProvider>
  )
}

export default App
