import { Float, Html } from "@react-three/drei"

const Carbono = () =>{
    return(
     <Float
     speed={1.5} 
     rotationIntensity={2} 
     floatIntensity={1} 
     floatingRange={[1, 1.5]}>
      <Html position={[-4,1.5,-2]}>
       <h2 style={{opacity:0.5}}>
       <span style={{ color: 'red' }}>C</span>
       <span style={{ color: 'black' }}>O</span>
       <span style={{ verticalAlign: 'sub', color:"red"}}>2</span>
       </h2>
      </Html>
     </Float>
    )
}

export default Carbono;
