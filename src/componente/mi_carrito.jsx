import React, { useState, useEffect } from 'react';

const Mi_Carrito = () => {
    const [compras, setCompras] = useState([]);
    const [mensaje, setMensaje] = useState('');
    const [userId, setUserId] = useState(localStorage.getItem('userId'));
  
    // Simulando el inicio de sesión y guardando el ID del usuario
     // Este sería el ID del usuario logueado, puede ser dinámico
  
     useEffect(() => {
        if (userId) {
          obtenerCompras();
        }
      }, [userId]);
  
      const obtenerCompras = async () => {
        try {
          const response = await fetch('http://lb-proyecto-1789007519.us-east-1.elb.amazonaws.com:8082/cliente');
          const data = await response.json();
          
          const usuario = data.find(user => user.id == userId);
          
          if (usuario && usuario.compras.length > 0) {
            setCompras(usuario.compras);
            setMensaje('');
          } else {
            setCompras([]);
            setMensaje('No tienes compras registradas.');
          }
        } catch (error) {
          console.error('Error al obtener las compras:', error);
          setMensaje('Hubo un error al obtener las compras.');
        }
      };
    
      return (
        <div>
          {userId ? (
            <>
              <button onClick={obtenerCompras}>Ver Carrito</button>
              <div id="carritoCompras">
                {mensaje && <p>{mensaje}</p>}
                {compras.map(compra => (
                  <div key={compra.id}>
                    <p>ID Compra: {compra.id}</p>
                    <p>Fecha: {compra.fecha_compra}</p>
                    <p>Monto Total: {compra.monto_Total}</p>
                    <p>Método de Pago: {compra.metodo_de_pago}</p>
                    <hr />
                  </div>
                ))}
              </div>
            </>
          ) : (
            <p>Por favor, inicia sesión para ver tu carrito.</p>
          )}
        </div>
      );
    };
  
  export default Mi_Carrito;