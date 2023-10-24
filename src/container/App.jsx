// App.js
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cliente from '../templates/cliente';
import Admin from '../pages/Administrador';
import cardsData from '../components/arreglo';
function App() {
  const [listaProductos, setListaProductos] = useState(cardsData);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Cliente listaProductos={listaProductos} setListaProductos={setListaProductos} />}
        />
        <Route
          path="/admin"
          element={<Admin listaProductos={listaProductos} setListaProductos={setListaProductos} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
