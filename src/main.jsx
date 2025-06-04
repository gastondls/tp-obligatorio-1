import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Registrar from './assets/formulario.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Registrar/>
    <App />
  </StrictMode>,
)
