import React from 'react';
import '../styles/Header.css'
const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src="../images/Logo.png" alt="logo" />
      </div>
      <nav>
        <a href="" className="nav-link">Inicio</a>
        <a href="" className="nav-link">Contaminación</a>
        <a href="" className="nav-link">Escasez</a>
        <a href="" className="nav-link">Acidificación</a>
      </nav>
    </header>
  );
};

export default Header;
