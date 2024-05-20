import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Shop from './Shop';
import Menu2 from './componente/Menu2'
import Cafe from './ComShoop/Cafe'; // Importa el componente Cafe
import Snack from './ComShoop/Snack'; // Importa el componente Snack
import Bebidas from './ComShoop/Bebidas'; // Importa el componente Bebidas
import Maquinas from './ComShoop/Maquinas';
import Mi_carrito from './componente/mi_carrito';
//agregar login

// Define las rutas 
const routes = (
  <Routes>
    <Route path="/menu2" element={<Menu2/>} />
    <Route path="/" element={<App/>} /> 
    <Route path="/Shop" element={<Shop></Shop>} />
    <Route path="/cafe" element={<Cafe />} />
    <Route path="/snack" element={<Snack />} />
    <Route path="/bebidas" element={<Bebidas />} />
    <Route path="/maquinas" element={<Maquinas/>} />
    <Route path="/mi_carrito" element={<Mi_carrito/>} />

  </Routes>
);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      {routes}
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();


