import { Cloud, Sky } from "@react-three/drei"

const Escena = () =>{
    return(
        <>
        <Sky
        sunPosition={[0,1,1]}
        mieCoefficient={0.004} // Adjusts the atmospheric dispersion
        mieDirectionalG={0.2}
        azimuth={90} 
        turbidity={-35}/>
        <Cloud
        color={"gray"}
        scale={0.3} // General scale of the cloud's segments, making the cloud appear larger or smaller.
        volume={6}
        position={[-1.6,0.8,2.5]}
        />
        </>
    )
} 

export default Escena;