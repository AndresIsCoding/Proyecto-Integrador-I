import { Html } from "@react-three/drei";
import '../AcidificacionSen.css';
import { useNavigate } from "react-router-dom";

const SensesText = () =>{

    const navigate = useNavigate();   

    const handleClick = (e) => {
        e.stopPropagation()
        navigate("/acidisoluc")
    };
    
  return(
    <Html>
     <div className="acidificacionsen-intro">
     <p style={{ margin: 0 }}>acidificacion</p>
     <h1 style={{ margin: 0 }}>Sensibilizacion</h1>
      <p>
      indagando en las consecuencias de este problema, los peces al encontrarse en un medio más ácido de lo normal gastan más energía para sus funciones fisiológicas, reduciendo su población. Se terminará reduciendo la disponibilidad de carbonato para varias especies de mariscos para formar sus esqueletos protectores y conchas. También, el más conocido es el cómo se ven afectados los arrecifes de coral, despojando al 25 por ciento de las especies marina de refugio necesario para su supervivencia.
      </p>
      <button onClick={handleClick}>Solucion?</button>
     </div>
    </Html>
)
}
 
export default SensesText;
