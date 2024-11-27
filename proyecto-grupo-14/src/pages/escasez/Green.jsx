import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useEffect } from 'react'
import * as THREE from 'three';


export function Green(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/models-3d/Green.glb')
  const { actions } = useAnimations(animations, group)

  useEffect(() => {
    // Activa todas las animaciones en bucle
    if (actions) {
      Object.values(actions).forEach((action) => {
        action.reset().play(); // Resetea y reproduce cada animación
        action.loop = THREE.LoopRepeat; // Configura para que se repita indefinidamente
      });
    }
  }, [actions]); // Ejecuta cada vez que las acciones cambien
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <mesh
          name="Lake_Landscape_plane"
          castShadow
          receiveShadow
          geometry={nodes.Lake_Landscape_plane.geometry}
          material={materials.Blue}
          position={[1.266, -0.115, 0.118]}
          rotation={[1.571, -0.006, -3.075]}
          scale={[-1.576, -1.186, -0.641]}
        />
        <mesh
          name="Ground_Landscape"
          castShadow
          receiveShadow
          geometry={nodes.Ground_Landscape.geometry}
          material={materials.Green}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          name="Cylinder"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder.geometry}
          material={materials['Material.002']}
          position={[3.641, 0.01, 0.032]}
          scale={0.059}
        />
        <mesh
          name="Icosphere"
          castShadow
          receiveShadow
          geometry={nodes.Icosphere.geometry}
          material={materials['Material.001']}
          position={[2.31, 1.089, -1.219]}
          scale={0.294}
        />
        <mesh
          name="Icosphere001"
          castShadow
          receiveShadow
          geometry={nodes.Icosphere001.geometry}
          material={materials['Material.003']}
          position={[3.829, 0.948, -0.153]}
          scale={0.294}
        />
        <mesh
          name="Cylinder001"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001.geometry}
          material={materials['Material.004']}
          position={[2.102, 0.279, -1.15]}
          scale={0.059}
        />
        <mesh
          name="Icosphere002"
          castShadow
          receiveShadow
          geometry={nodes.Icosphere002.geometry}
          material={materials['Material.005']}
          position={[-2.583, 0.816, 2.732]}
          scale={0.294}
        />
        <mesh
          name="Icosphere003"
          castShadow
          receiveShadow
          geometry={nodes.Icosphere003.geometry}
          material={materials['Material.006']}
          position={[-4.102, 0.958, 1.665]}
          scale={0.294}
        />
        <mesh
          name="Cylinder002"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder002.geometry}
          material={materials['Material.007']}
          position={[-4.309, 0.148, 1.735]}
          scale={0.059}
        />
        <mesh
          name="Cylinder003"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder003.geometry}
          material={materials['Material.008']}
          position={[-2.771, -0.121, 2.917]}
          scale={0.059}
        />
        <group
          name="13cow001"
          position={[2.267, 0.571, -3.835]}
          rotation={[Math.PI, -0.006, Math.PI]}
          scale={0.264}>
          <mesh
            name="Plane001"
            castShadow
            receiveShadow
            geometry={nodes.Plane001.geometry}
            material={materials.bijelefleke}
          />
          <mesh
            name="Plane001_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane001_1.geometry}
            material={materials.uha}
          />
          <mesh
            name="Plane001_2"
            castShadow
            receiveShadow
            geometry={nodes.Plane001_2.geometry}
            material={materials.nos}
          />
          <mesh
            name="Plane001_3"
            castShadow
            receiveShadow
            geometry={nodes.Plane001_3.geometry}
            material={materials.rogovi}
          />
          <mesh
            name="Plane001_4"
            castShadow
            receiveShadow
            geometry={nodes.Plane001_4.geometry}
            material={materials.cice}
          />
          <mesh
            name="Plane001_5"
            castShadow
            receiveShadow
            geometry={nodes.Plane001_5.geometry}
            material={materials.crnetocke}
          />
        </group>
        <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <skinnedMesh
            name="Bird_02"
            geometry={nodes.Bird_02.geometry}
            material={materials['Material #41']}
            skeleton={nodes.Bird_02.skeleton}
          />
          <primitive object={nodes.Bone156} />
        </group>
      </group>
    </group>
  )
}


export default Green;
useGLTF.preload('/Green.glb')
