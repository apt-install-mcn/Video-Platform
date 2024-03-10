import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App'; // Importa el componente principal de la aplicación
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App /> {/* Renderiza el componente principal de la aplicación */}
  </React.StrictMode>,
);

// Si deseas medir el rendimiento de tu aplicación, puedes usar reportWebVitals
reportWebVitals();
