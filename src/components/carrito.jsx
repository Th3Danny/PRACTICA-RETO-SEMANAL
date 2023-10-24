import React from "react";
import Style from "../css/carrito.module.css";

export default function Carrito({ carrito, eliminarDelCarrito, limpiarCarrito }) {
    
    const contarCantidad = (nombre) => {
        return carrito.filter((item) => item.nombre === nombre).length;
    };

   
    const productosUnicos = [...new Set(carrito.map((item) => item.nombre))];

    return (
        <div className={Style.carrito}>
            <h2>Carrito</h2>
            {carrito.length > 0 ? (
                <ul>
                    {productosUnicos.map((nombre, index) => (
                        <li key={index}>
                            <img src={carrito.find((item) => item.nombre === nombre).img} alt={nombre} width="50" height="50" />
                            {nombre} - Cantidad: {contarCantidad(nombre)}
                            ${carrito.find((item) => item.nombre === nombre).precio}
                            <button onClick={() => eliminarDelCarrito(carrito.find((item) => item.nombre === nombre))}>Eliminar</button>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>El carrito está vacío.</p>
            )}
            <button onClick={limpiarCarrito}>Limpiar Carrito</button>
        </div>
    );
}
