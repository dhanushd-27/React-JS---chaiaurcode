import React from "react";
import { Outlet } from "react-router-dom";
import { Header, Footer } from './components/index.js'

export default function App() {
  return(
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}