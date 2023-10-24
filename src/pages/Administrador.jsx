import React, { useState } from "react";
import ModalEditarProducto from '../components/editar';
import EliminarProducto from "../components/eliminarProducto";
import { useNavigate } from 'react-router-dom';
import Style from "../css/Admin.module.css";

export default function Admin({ listaProductos, setListaProductos }) { // Recibe listaProductos y setListaProductos como propiedades
    const navigate = useNavigate();
    const [nuevoProducto, setNuevoProducto] = useState({ nombre: '', precio: 0, img: null });
    const [modalAbierto, setModalAbierto] = useState(false);
    const [productoSeleccionado, setProductoSeleccionado] = useState(null);

    const handleInputChange = (e) => {
        const { name, value, files } = e.target;
        if (name === 'img') {
            setNuevoProducto({ ...nuevoProducto, [name]: files[0] });
        } else {
            setNuevoProducto({ ...nuevoProducto, [name]: value });
        }
    };

    const crearProducto = () => {
        if (!nuevoProducto.nombre || nuevoProducto.precio <= 0 || !nuevoProducto.img) {
            alert("Por favor, completa todos los campos antes de crear el producto.");
            return;
        }
    
        
        const nuevoId = Date.now(); 
        const productoCreado = {
            id: nuevoId,
            ...nuevoProducto,
            cantidad: 1,
            img: URL.createObjectURL(nuevoProducto.img),
        };
        setListaProductos([...listaProductos, productoCreado]);
        setNuevoProducto({ nombre: '', precio: 0, img: null });
    };
    


    const eliminarProducto = (id) => {
        const index = listaProductos.findIndex(producto => producto.id === id);

        if (index !== -1) {
            const nuevosProductos = [...listaProductos];
            nuevosProductos.splice(index, 1);
            setListaProductos(nuevosProductos);
        }
    };



    const abrirModalEditar = (producto) => {
        setProductoSeleccionado(producto);
        setModalAbierto(true);
    };

    const guardarCambios = (productoEditado) => {
        const index = listaProductos.findIndex(producto => producto.id === productoEditado.id);
        const nuevosProductos = [...listaProductos];
        nuevosProductos[index] = productoEditado;
        setListaProductos(nuevosProductos);
        setModalAbierto(false);
    };

    return (
        <div className={Style.admin_container}>
            <a onClick={() => navigate("/")}>
                <button>Volver</button>
            </a>
            <h2>Lista de Productos</h2>
            <ul className={Style.product_list}>
                {listaProductos.map(producto => (
                    <li key={producto.id} className={Style.product_item}>
                        {producto.img && <img className={Style.product_image} src={producto.img} alt="" />}
                        <div className={Style.product_details}>
                            <span className={Style.product_name}>Nombre: {producto.nombre}</span>
                            <span className="product-price">Precio: ${producto.precio}</span>
                        </div>
                        <div className={Style.product_buttons}>
                            <button className={Style.edit_button} onClick={() => abrirModalEditar(producto)}>Editar</button>
                            <EliminarProducto id={producto.id} onDelete={eliminarProducto} />
                        </div>
                    </li>
                ))}

            </ul>
            {modalAbierto && (
                <ModalEditarProducto producto={productoSeleccionado} onClose={() => setModalAbierto(false)} onGuardar={guardarCambios} />
            )}
            <h2>Crear Producto</h2>
            <input className={Style.input_field} type="text" name="nombre" placeholder="Nombre del producto" value={nuevoProducto.nombre} onChange={handleInputChange} />
            <input className={Style.input_field} type="number" name="precio" placeholder="Precio del producto" value={nuevoProducto.precio} onChange={handleInputChange} />
            <input className={Style.input_field} type="file" name="img" onChange={handleInputChange} />
            <button className={Style.create_button} onClick={crearProducto}>Crear Producto</button>
        </div>
    );
}
