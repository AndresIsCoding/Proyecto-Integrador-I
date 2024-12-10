import React, { useRef, useState } from "react";
import { RigidBody } from "@react-three/rapier";
import { useGLTF } from "@react-three/drei";

const PlasticB = ({ scale }) => {
  const { nodes, materials } = useGLTF('../models-3d/PlasticB2.glb');
  const initialPosition = [0, 5, 0];
  const ref = useRef();
  const [position, setPosition] = useState(initialPosition);

  const handleClick = () => {
    const newX = Math.random() * 10 - 5;
    const newY = Math.random() * 5 + 1;
    const newPosition = [newX, newY, 0];
    setPosition(newPosition);

    if (ref.current) {
      ref.current.setTranslation({ x: newX, y: newY, z: 0 }, true);
      ref.current.setLinvel({ x: 0, y: 0, z: 0 });
    }
  };

  return (
    <>
      <RigidBody
        ref={ref}
        mass={1}
        position={position}
        friction={0.5}
        restitution={0.7}
        colliders="trimesh"
      >
        <group dispose={null}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle023.geometry}
            material={materials.bottle}
            scale={scale}
            onClick={handleClick}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Circle022.geometry}
              material={materials.krishka}
              scale={scale}
            />
          </mesh>
        </group>
      </RigidBody>

      <RigidBody type="fixed" position={[0, -2, 0]} restitution={0.5} friction={0.9}>
        <mesh receiveShadow>
          <boxGeometry args={[50, 0.1, 50]} />
          <meshStandardMaterial
            color="lightgray"
            opacity={0}
            transparent={true}
          />
        </mesh>
      </RigidBody>

           <RigidBody type="fixed" position={[0, 0, 0]} restitution={0.5} friction={0.9}>
        <mesh receiveShadow>
          <boxGeometry args={[1, 10, 0.1]} />
          <meshStandardMaterial
            color="gray"
            opacity={0}
            transparent={true}  
          />
        </mesh>
      </RigidBody>
    </>
  );
};

export default PlasticB;

useGLTF.preload('../models-3d/PlasticB2.glb');
