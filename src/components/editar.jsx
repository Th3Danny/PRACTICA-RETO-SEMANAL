import React, { useState } from 'react';

const ModalEditarProducto = ({ producto, onClose, onGuardar }) => {
    const [productoEditado, setProductoEditado] = useState({ ...producto });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProductoEditado(prevProductoEditado => ({ ...prevProductoEditado, [name]: value }));
    };

    const handleGuardar = () => {
        onGuardar(productoEditado);
        onClose();
    };

    return (
        <div className="modal">
            <h2>Editar Producto</h2>
            <input type="text" name="nombre" value={productoEditado.nombre} onChange={handleInputChange} />
            <input type="number" name="precio" value={productoEditado.precio} onChange={handleInputChange} />
            <button onClick={handleGuardar}>Guardar</button>
            <button onClick={onClose}>Cerrar</button>
        </div>
    );
};

export default ModalEditarProducto;