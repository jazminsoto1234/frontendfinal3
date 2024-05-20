
import React, { useState, useEffect } from 'react';
import './Maquinas.css'




const Maquinas = () => {
  const [maquinas, setMaquinas] = useState([]);

  useEffect(() => {
    // Realizar la solicitud a la API al cargar el componente
    fetch('http://lb-proyecto-1789007519.us-east-1.elb.amazonaws.com:8083/maquina')
      .then(response => response.json())
      .then(data => setMaquinas(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h2>Máquinas Expendedoras</h2>
      <div className="maquinas-container">
        {Array.isArray(maquinas) && maquinas.map(maquina => (
          <div key={maquina.id} className="maquina-card">
            <img src={maquina.img} alt="Imagen de la máquina" />
            <h3>{maquina.tipo}</h3>
            <p>Ubicación: {maquina.ubicacion}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Maquinas;
