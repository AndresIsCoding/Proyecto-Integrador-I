import React, { useRef, useState } from 'react';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { RigidBody } from '@react-three/rapier';

const PlasticBottles = (props) => {
  const { nodes, materials } = useGLTF('../models-3d/PlasticBottles.glb');
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  
  const handleClick = (ref) => {
    const newX = Math.random() * 10 - 5;
    const newY = Math.random() * 5 + 1;
    const newPosition = [newX, newY, 0];

    if (ref.current) {
      ref.current.setTranslation({ x: newX, y: newY, z: 0 }, true);
      ref.current.setLinvel({ x: 0, y: 0, z: 0 });
    }
  };

  const scale = 10;  

  return (
    <group {...props} dispose={null}>

      <RigidBody
        ref={ref1}
        mass={1}
        friction={0.5}
        restitution={0.7}
        colliders="trimesh"
        position={[2, 3, 0]}
        onClick={() => handleClick(ref1)}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plastic_Bottle_03_GEO.geometry}
          material={materials.Plastic_Bottles}
          rotation={[0, Math.PI / 4, 0]}
          scale={[scale, scale, scale]} 
        />
      </RigidBody>

      <RigidBody
        ref={ref2}
        mass={1}
        friction={0.5}
        restitution={0.7}
        colliders="trimesh"
        position={[-2, 2, 0]} 
        onClick={() => handleClick(ref2)}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plastic_Bottle_02_GEO.geometry}
          material={materials.Plastic_Bottles}
          rotation={[0, -Math.PI / 4, 0]}
          scale={[scale, scale, scale]}  
        />
      </RigidBody>

      <RigidBody
        ref={ref3}
        mass={1}
        friction={0.5}
        restitution={0.7}
        colliders="trimesh"
        position={[-3, 1, 0]}
        onClick={() => handleClick(ref3)}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plastic_Bottle_01_GEO.geometry}
          material={materials.Plastic_Bottles}
          rotation={[0, Math.PI / 2, 0]}
          scale={[scale, scale, scale]}  
        />
      </RigidBody>
    </group>
  );
};

export default PlasticBottles;

useGLTF.preload('../models-3d/PlasticBottles.glb');
