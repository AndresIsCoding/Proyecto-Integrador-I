import { Canvas } from "@react-three/fiber";
import './AcidificacionInt.css';
import Lights from "./lights/Lights";
import Coral from "./elements/Coral";
import Floor from "./elements/Floor";
import Header from "../../../components/Header";

const AcidificacionInt = () => {
    const cameraSettings = {
        
      };

    return (
    <div className="acidificacion-background">
    <Header/>
    <div className="acidificacion-intro">
      <h1>Introduccion</h1>
        <p>
        como sabemos, el océano es uno de los ecosistemas más grandes
        e importantes del planeta, pues no solo nos provee de una gran
        variedad de recursos naturales como alimentos ,compuestos químicos 
        para medicinas y minerales que se encuentran en el lecho marino, 
        tambien se encarga de regular el clima, la temperatura y la generacion
        de una gran parte del oxígeno del planeta.
        </p>
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
     <Coral scale={0.02} position={[-2,-1.5,0]}/>
     <Floor scale={2} position={[-2,-1.5,0]} />
    </Canvas>
    </div>
    );
};

export default AcidificacionInt;
