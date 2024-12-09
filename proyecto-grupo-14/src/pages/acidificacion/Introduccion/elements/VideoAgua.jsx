import { useVideoTexture } from "@react-three/drei"

const VideoAgua = (props) => {
    const Texture = useVideoTexture("../videos/CoralVideo.mp4",{
        loop : true,
        start : true,
        muted : false
    });
    
    return(
        <mesh {...props}>
         <planeGeometry args={[2,1]}/>
         <meshBasicMaterial map={Texture} toneMapped={false}/>
        </mesh>
    );
};

export default VideoAgua; 