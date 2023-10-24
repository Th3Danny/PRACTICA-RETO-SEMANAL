import React from "react";
import Style from "../css/card.module.css";

export default function Card({ nombre, precio, imagen, onAgregarAlCarrito }) {
    return (
        <div className={Style.contenedor}>
            <div className={Style.card}>
                <img src={imagen} alt={nombre} />
                <h3>{nombre}</h3>
                <h3>{precio}</h3>
                <button onClick={onAgregarAlCarrito}>Agregar al carrito</button>
            </div>
        </div>
    );
}
