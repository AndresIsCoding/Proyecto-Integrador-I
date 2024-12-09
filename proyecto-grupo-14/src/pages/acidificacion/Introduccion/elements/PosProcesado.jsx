import { EffectComposer, Scanline, } from "@react-three/postprocessing";

const PosProcesado = (props) => {
  return (
    <EffectComposer>
      <Scanline/>
    </EffectComposer>
  );
};

export default PosProcesado;