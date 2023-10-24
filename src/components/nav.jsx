import React from "react";
import Style from "../css/nav.module.css";
import { useNavigate } from 'react-router-dom';

export default function Barra({ contadorCarrito, toggleCarrito }) {
    const navigate = useNavigate();

    
    const mostrarContador = () => {
        if (contadorCarrito > 9) {
            return "+9";
        } else {
            return contadorCarrito;
        }
    }

    return (
        <div className={Style.contenedor}>
            <h2 className={Style.shop}>Shop</h2>
            <div className={Style.carritoContainer}>
                <button onClick={() => navigate("/admin")}>Administrador</button>
                <button className={Style.carrito} onClick={toggleCarrito}>
                    Carrito <span className={Style.contador}>{mostrarContador()}</span>
                </button>
            </div>
        </div>
    );
}
