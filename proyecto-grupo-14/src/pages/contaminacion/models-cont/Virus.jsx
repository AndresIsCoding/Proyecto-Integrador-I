import React, { useRef } from 'react'
import { OrbitControls, useGLTF } from '@react-three/drei'
import * as THREE from 'three';
const Virus = (props) =>  {
  const { nodes, materials } = useGLTF('../models-3d/Virus.glb')
  
  materials.virus.color = new THREE.Color(1, 0, 0);
  
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.virusunsub.geometry}
        material={materials.virus}
        position={[-2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.virussubdiv.geometry}
        material={materials.virus}
        position={[2, 0, 0]}
      />
    </group>
  )
}

export default Virus;

useGLTF.preload('../models-3d/Virus.glb')
