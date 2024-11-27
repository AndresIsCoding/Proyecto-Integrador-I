import React from "react";
import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

export default function Skull(props) {
  const { nodes, materials } = useGLTF("/models-3d/skull.glb");

  return (
    <RigidBody
      colliders="hull" // Define el tipo de colisionador (box, hull, etc.)
      mass={1} // Define la masa del cuerpo rígido
      restitution={0.5} // Coeficiente de rebote
      friction={0.7} // Coeficiente de fricción
      {...props}
    >
      
        <group position={[0, 6.442, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube001_1.geometry}
            material={materials["Bone.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube001_2.geometry}
            material={materials["Detail.001"]}
          />
        </group>
      
    </RigidBody>
  );
}

useGLTF.preload("/models-3d/skull.glb");
