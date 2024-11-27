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
        </>
    )
} 

export default Escena;