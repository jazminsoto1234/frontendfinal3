import React, { useEffect, useState } from 'react';
import './Bebidas.css';

export default function Snack() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://lb-proyecto-1789007519.us-east-1.elb.amazonaws.com:8081/snack') //Modificar esto cuando lo subimos a S3
          .then(response => {
            if (!response.ok) {
              throw new Error('Networks response was not ok');
            }
            console.log("Funciona");
            return response.json();
          })
          .then(data => setData(data))
          .catch(error => console.error('There was a problem with the fetch operation:', error));
      }, []);

    return (
        <div className="row">
            {data.map(e => (
                <div key={e.id} className="col-md-4">
                    <div className="card mb-4 product-wap rounded-0">
                        <div className="card rounded-0">
                            <img className="card-img rounded-0 img-fluid" src={e.img} alt="Product" />
                            <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                                <ul className="list-unstyled">
                                    <li><a className="btn btn-success text-white" href="#"><i className="far fa-heart"></i></a></li>
                                    <li><a className="btn btn-success text-white mt-2" href="#"><i className="far fa-eye"></i></a></li>
                                    <li><a className="btn btn-success text-white mt-2" href="#"><i className="fas fa-cart-plus"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="card-body">
                            <a href="shop-single.html" className="h3 text-decoration-none">{e.nombre}</a>
                            <ul className="w-100 list-unstyled d-flex justify-content-between mb-0">
                                <li>Stock: {e.stock}</li>
                                <li>Fabricante: {e.fabricante}</li>
                            </ul>
                            <p className="text-center mb-0">S/{e.precio}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
