import React, { useState, useEffect } from 'react';
import Card from "./ComShoop/Card";
import { Cabeza } from "./componente/Cabeza";
import Menu from "./componente/Menu";
 // Importa el componente de inicio de sesión

function Shop() {
  const [bebidas, setBebidas] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://lb-proyecto-1789007519.us-east-1.elb.amazonaws.com:8081/producto');
        if (!response.ok) {
          throw new Error('No se pudo obtener la lista de bebidas');
        }
        const data = await response.json();
        setBebidas(data); // Establecemos los datos recibidos en el estado
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData(); // Llamamos a la función para cargar los datos al montar el componente
  }, []); // El segundo parámetro de useEffect indica que esta función se ejecutará solo una vez, al montar el componente

  // Función para manejar el clic en el botón "Añadir al carrito"
  const handleAddToCart = (bebida) => {
    // Verifica si el usuario ha iniciado sesión
    if (!isLoggedIn) {
      // Si no ha iniciado sesión, redirecciona a la página de inicio de sesión
      window.location.href = '/login.html';
      return; // Detenemos la ejecución de la función
    }

    // Si el usuario ha iniciado sesión, realiza la acción de agregar al carrito
    // Puedes implementar la lógica para agregar al carrito aquí
    console.log('Producto agregado al carrito:', bebida);
  };

  return (
    <div>
      <Cabeza />
      <Menu />
      <div className="container mt-4">
        <div className="row">
          {bebidas.map(bebida => (
            <div key={bebida.id} className="col-md-4 mb-4">
              <Card bebida={bebida} onAddToCart={handleAddToCart} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Shop;
