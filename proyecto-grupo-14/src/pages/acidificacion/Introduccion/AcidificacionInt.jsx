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
        como sabemos, el océano es uno de los ecosistemas más grandes<br />
        e importantes del planeta, pues no solo nos provee de una gran<br />
        variedad de recursos naturales como alimentos ,compuestos químicos <br />
        para medicinas y minerales que se encuentran en el lecho marino, <br />
        tambien se encarga de regular el clima, la temperatura y la generacion<br /> 
        de una gran parte del oxígeno del planeta.<br /><br />

        El fenómeno de la acidificación es una disminución en los niveles de<br />
        Ph del océano, este ocurre debido a que los océanos al intentar absorber<br />
        las grandes cantidades de dióxido de carbono de la atmósfera, generado <br />
        por actividades industriales, la combustión de combustibles fósiles y la <br />
        deforestación, esto hace que el se vuelva intolerable para varios <br />
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
