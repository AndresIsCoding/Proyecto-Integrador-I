
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useNavigate } from 'react-router-dom';

const Boton = (props) => {
  const { nodes, materials } = useGLTF('../models-3d/Boton.glb')

  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.PLAY_0.geometry}
          material={materials.PLAY}
          position={[0, -0.009, 0]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.BODY_0.geometry}
          material={materials.SSS_PlasticRough}
          position={[0, -0.009, 0]}
          rotation={[Math.PI / 2, 0, 0]}
        />
      </group>
    </group>
  )
}

export default Boton;

useGLTF.preload('../models-3d/Boton.glb')