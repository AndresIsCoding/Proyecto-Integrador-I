import { useRef } from 'react';
import { useFrame } from "@react-three/fiber";
/* eslint-disable react/no-unknown-property */

const Cube = () => {
    const boxRef = useRef(null);

    useFrame(({ clock }) => {
        const t = clock.getElapsedTime(); // Gets the elapsed time
        const x = Math.sin(t) * 5; // The position in X ranges from -5 to 5
        const y = Math.cos(x); 

        if (boxRef.current) {
            boxRef.current.position.x = x; 
            boxRef.current.position.y = y; 
        }
    });





    return ( //Create the cube with the properties
        <mesh ref={boxRef}>
            <boxGeometry args={[1, 1, 1]} />
            <meshPhongMaterial color="red" specular="white" shininess={100} />
        </mesh>
    );
};

export default Cube;
