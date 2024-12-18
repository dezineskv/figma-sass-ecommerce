import { React, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import './scss/styles.scss'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/figma-sass-ecommerce/">
  <StrictMode>
        <App />
    </StrictMode>
    </BrowserRouter>,

)
