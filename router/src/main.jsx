import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  {/* BrowserRouter is used to wrap the App component so that the routing can be done in the application */}
  <BrowserRouter> 
    <App />
    </BrowserRouter>
  </React.StrictMode>
)
