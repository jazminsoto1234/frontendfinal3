import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';


const Footer = () => {
  return (
    <div className="footer-container">
      <p className="footer-text">¿Quieres conocer las máquinas expendedoras que hay?</p>
      <Link to="/maquinas">
        <button className="footer-button">Conocer más</button>
      </Link>
    </div>
  );
}

export default Footer;
