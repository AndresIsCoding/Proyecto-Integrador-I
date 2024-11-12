import { useVideoTexture } from "@react-three/drei";
import { useCallback, useState } from "react";

const Video2 = (props) => {
    const texture = useVideoTexture("../videos/Viruses.mp4", {
      muted: true,
      loop: true,
      start: true,
    });
  
    const [pause, setPause] = useState(false);
  
    const handleVideo = useCallback(
      (e) => {
        e.stopPropagation();
        pause ? texture.image.play() : texture.image.pause();
        setPause(!pause);
      },
      [pause, setPause, texture]
    );
  
    return (
      <mesh position={[0, 0, -5]} scale={[10, 6, 1]}>
        <planeGeometry args={[3, 2]} /> 
        <meshBasicMaterial map={texture} toneMapped={false} />
       </mesh>
    );
  };
  
  export default Video2;