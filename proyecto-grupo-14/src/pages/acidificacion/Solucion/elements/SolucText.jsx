import { Html, Text3D, Center } from "@react-three/drei";
import '../AcidificacionSolu.css';

const SolucText = () =>{
return(
    <Center top left position={[5.6, -1.6, -0.4]}>
        <Html position={[0,1.5,0]}>
         <p style={{ margin: 0 }}>acidificacion</p>
         <h1 style={{ margin: 0 }}>Solucion</h1>
        </Html> 
        <Text3D
          font="/fonts/KGPrimaryItalics.json"
          bevelSize={0.03}
          bevelThickness={0.1}
          height={0.1}
          lineHeight={0.75}
          letterSpacing={0.0002}
          size={0.3}
        >
          {`En cuanto a métodos para mitigar el\nproblema,la solución más clara es\nque las nuevas regulaciones\ny gobiernos apunten a la transición\n a nuevas fuentes energéticas\ny la búsqueda de nuevas alternativas\nde combustibles para dejar atrás los\nfósiles para minimizar la emisión\nde gases de efecto invernadero.`}
          <meshStandardMaterial color="red" />
        </Text3D>
      </Center>  
)
}

 
export default SolucText;
