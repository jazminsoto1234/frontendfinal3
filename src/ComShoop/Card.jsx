import React from 'react';

export default function Card({ bebida }) {
  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-4">
          <img src={bebida.img} className="img-fluid rounded-start" alt="Producto" />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{bebida.nombre}</h5>
            <p className="card-text">Precio: {bebida.precio}</p>
            <p className="card-text">Stock: {bebida.stock}</p>
            <p className="card-text">Fabricante: {bebida.fabricante}</p>
            <button className="btn btn-primary">Añadir al carrito</button>
          </div>
        </div>
      </div>
    </div>
  );
}
