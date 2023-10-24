import React from "react";

const EliminarProducto = ({ id, onDelete }) => {
  const handleEliminarClick = () => {
    if (id !== null && window.confirm("¿Estás seguro de que deseas eliminar este producto?")) {
      onDelete(id);
    }
  };

  return (
    <button onClick={handleEliminarClick}>Eliminar</button>
  );
};

export default EliminarProducto;
