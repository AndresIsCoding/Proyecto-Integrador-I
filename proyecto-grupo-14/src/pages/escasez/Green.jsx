import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const Green = (props) => {
  const { nodes, materials } = useGLTF('/models-3d/Green.glb');
  const groupRef = useRef();

  // Usa useFrame para rotar el modelo en cada fotograma
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.005; // Ajusta la velocidad de rotación
    }
  });

  return (
    <group ref={groupRef} {...props} dispose={null} scale={1}> {/* Ajusta el valor de scale aquí */}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Lake_Landscape_plane.geometry}
        material={materials.Blue}
        position={[1.266, -0.115, 0.118]}
        rotation={[1.571, -0.006, -3.075]}
        scale={[-1.576, -1.186, -0.641]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Ground_Landscape.geometry}
        material={materials.Green}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder.geometry}
        material={materials['Material.002']}
        position={[3.641, 0.01, 0.032]}
        scale={0.059}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere.geometry}
        material={materials['Material.001']}
        position={[2.31, 1.089, -1.219]}
        scale={0.294}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere001.geometry}
        material={materials['Material.003']}
        position={[3.829, 0.948, -0.153]}
        scale={0.294}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder001.geometry}
        material={materials['Material.004']}
        position={[2.102, 0.279, -1.15]}
        scale={0.059}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere002.geometry}
        material={materials['Material.005']}
        position={[-2.583, 0.816, 2.732]}
        scale={0.294}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere003.geometry}
        material={materials['Material.006']}
        position={[-4.102, 0.958, 1.665]}
        scale={0.294}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder002.geometry}
        material={materials['Material.007']}
        position={[-4.309, 0.148, 1.735]}
        scale={0.059}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder003.geometry}
        material={materials['Material.008']}
        position={[-2.771, -0.121, 2.917]}
        scale={0.059}
      />
      <group position={[2.267, 0.571, -3.835]} rotation={[Math.PI, -0.006, Math.PI]} scale={0.264}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001.geometry}
          material={materials.bijelefleke}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001_1.geometry}
          material={materials.uha}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001_2.geometry}
          material={materials.nos}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001_3.geometry}
          material={materials.rogovi}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001_4.geometry}
          material={materials.cice}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001_5.geometry}
          material={materials.crnetocke}
        />
      </group>
    </group>
  );
}

export default Green;

useGLTF.preload('/Green.glb');
