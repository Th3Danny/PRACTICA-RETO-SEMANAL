import Card from "../components/card";
import Barra from "../components/nav";
import React, { useState } from "react";
import Carrito from "../components/carrito";
import { useNavigate } from 'react-router-dom';
import Style from "../css/Cliente.module.css"; // Asegúrate de usar el nombre correcto del archivo CSS

export default function Cliente({ listaProductos, setListaProductos }) { // Recibe listaProductos y setListaProductos como propiedades
  const navigate = useNavigate();
  const [carrito, setCarrito] = useState([]);
  const [contadorCarrito, setContadorCarrito] = useState(0);
  const [mostrarCarrito, setMostrarCarrito] = useState(false);

  const agregarAlCarrito = (item) => {
    setCarrito([...carrito, item]);
    setContadorCarrito(carrito.length + 1);
  };

  const eliminarDelCarrito = (item) => {
    const nuevoCarrito = carrito.filter((elemento) => elemento !== item);
    setCarrito(nuevoCarrito);
    setContadorCarrito(carrito.length - 1);
  };

  const limpiarCarrito = () => {
    setCarrito([]);
    setContadorCarrito(0);
  };

  return (
    <div>
           <Barra
                contadorCarrito={contadorCarrito}
                toggleCarrito={() => setMostrarCarrito(!mostrarCarrito)}
            />
      <h1 className={Style.titulo}>Tienda</h1>
      <div className={Style.cards}>
        {listaProductos.map((data, index) => (
          <Card
            key={index}
            imagen={data.img}
            nombre={data.nombre}
            precio={data.precio}
            onAgregarAlCarrito={() => agregarAlCarrito(data)}
          />
        ))}
            </div>
            {mostrarCarrito && (
                <div className={Style.carrito_overlay}>
                    <div className={Style.carrito_container}>
                        <Carrito
                            carrito={carrito}
                            eliminarDelCarrito={eliminarDelCarrito}
                            limpiarCarrito={limpiarCarrito}
                        />
                        <button onClick={() => setMostrarCarrito(false)} className={Style.cerrar_carrito}>
                            Cerrar
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
