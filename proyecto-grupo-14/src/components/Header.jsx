import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Header.css'
import Navbar from './Navbar';

const Header = () => {
  const [logo, setLogo] = useState("../images/Logo.png");
  const [textoColor, setTextColor] = useState("#000")
  const location = useLocation();
  
  useEffect(()=>{
    if(location.pathname === "/inicio"){
        setLogo("../images/DarkLogo.png");
        setTextColor("#000");
    } else{
        setLogo("../images/Logo.png");
        setTextColor("#FFFFFF");
    }
    }, [location]);
  return (
    <>
      <Navbar/>
      <header>
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <nav>
          <Link to="/inicio" style={{color:textoColor}}>Inicio</Link>
          <Link to="/contaminacion" style={{color:textoColor}}>Contaminación</Link>
          <Link to="/escasez"  style={{color:textoColor}}>Escasez</Link>
          <Link to="/acidificacion"  style={{color:textoColor}}>Acidificación</Link>
        </nav>
      </header>
    </>
  );
};

export default Header;
