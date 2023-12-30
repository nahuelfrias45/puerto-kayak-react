import React from 'react'
import ReactDOM from 'react-dom/client'
import { Header } from './Header.jsx'
import { Portada } from './Portada.jsx'
import { Nosotros } from './Nosotros.jsx'
import { Actividades } from './Actividades.jsx'
import { Footer } from './Footer.jsx'
import './index.css'
import '/node_modules/bootstrap-icons/font/bootstrap-icons.min.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Portada />
    <Nosotros />
    <Actividades />
    <Footer />
  </React.StrictMode>,
)
