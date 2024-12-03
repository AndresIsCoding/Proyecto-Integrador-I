import ScenePC from "./ScenePC";
import { Canvas} from "@react-three/fiber";
const PContaminacion = () => {    
    const cameraSettings = { 
        fov: 60,
    };
    return (
        <Canvas 
        className="canvas-preguntaC"
        camera={cameraSettings}
        style={{position: "absolute",width: '100%', height: '100%', left: 0, top: 0, bottom: 0,}}
        >
            <ScenePC/>
        </Canvas>

    );
};

export default PContaminacion;