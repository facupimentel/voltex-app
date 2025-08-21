import React from "react";


const ItemCount = ({ cantidad, setCantidad }) => {

  const incrementar = (id) => setCantidad((prev) => Math.min(prev + 1, 10));
  const decrementar = (id) => setCantidad((prev) => Math.min(prev - 1, 10));

  return (
    <div>
      <div className="botonera">
        <button
          className="cantidad"
          style={{ width: "40px" }}
          onClick={decrementar}
          disabled={cantidad === 1}
        >
          -
        </button>

        <span>{cantidad}</span>

        <button
          className="cantidad"
          style={{ width: "40px" }}
          onClick={incrementar}
          disabled={cantidad === 10}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
