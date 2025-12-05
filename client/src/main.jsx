import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'  <-- COMENTÉ ESTA LÍNEA PORQUE NO TIENES ESTE ARCHIVO
import App from './App.jsx'

// Diagnóstico: Verificar si encontramos el elemento root
const rootElement = document.getElementById('root');

if (!rootElement) {
  console.error("ERROR GRAVE: No se encontró el elemento con id 'root'. Asegúrate de que el HTML contiene un elemento con este id.");
} else {
  console.log("Elemento root encontrado. Iniciando renderizado de React...");
  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
}