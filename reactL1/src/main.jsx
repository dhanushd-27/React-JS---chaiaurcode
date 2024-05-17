import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const newEle = React.createElement(
  "a",
  {
    href: "http//:google.com",
    target: "_blank"
  },
  "Click this to visit google"
) 

ReactDOM.createRoot(document.getElementById('root')).render(
    <App />,  {/* App() */}
)
