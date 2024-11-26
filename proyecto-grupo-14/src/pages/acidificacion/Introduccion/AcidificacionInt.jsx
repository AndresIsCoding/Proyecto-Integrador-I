import { Canvas } from "@react-three/fiber";
import './AcidificacionInt.css';
import Lights from "./lights/Lights";
import Coral from "./elements/Coral";
import Floor from "./elements/Floor";
import Header from "../../../components/Header";
import Boton from "./elements/Boton";
import { useNavigate, ScrollRestoration } from "react-router-dom";

const AcidificacionInt = () => {
    const cameraSettings = {
        
      };
    
    const navigate = useNavigate();   

    const handleClick = (e) => {
        e.stopPropagation()
        navigate("/acidisensi")
    };

    return (
    <div className="acidificacion-background">
      <ScrollRestoration/>
    <Header/>
     <div className="acidificacion-intro">
     <p style={{ margin: 0 }}>acidificacion</p>
     <h1 style={{ margin: 0 }}>Introduccion</h1>
        <p>
        El fenómeno de la acidificación es una disminución en los niveles de
        Ph del océano, este ocurre debido a que los océanos al intentar absorber
        las grandes cantidades de dióxido de carbono de la atmósfera, generado 
        por actividades industriales, la combustión de combustibles fósiles y la 
        deforestación, esto hace que el se vuelva intolerable para varios 
        organismos, poniendo en riesgo el ecosistema marino.
        </p>
     </div>

    <Canvas shadows camera={cameraSettings}>
     <Lights/>
     <Boton position={[1,-1.5,2]} 
          onClick={(e) => handleClick(e)}/>
     <Coral scale={0.02} position={[-2,-1.5,0]}/>
     <Floor scale={2} position={[-2,-1.5,0]} />
    </Canvas>
    </div>
    );
};

export default AcidificacionInt;
