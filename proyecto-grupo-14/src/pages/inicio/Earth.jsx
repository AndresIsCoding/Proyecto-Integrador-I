import React, { useRef } from 'react'
import { OrbitControls, useGLTF } from '@react-three/drei'

const Earth = (props) => {
  const { nodes, materials } = useGLTF('../models-3d/earth.glb')
  return (
    <group {...props} dispose={null}>
      <OrbitControls
       autoRotate={true}
       enableZoom={false}
       enablePan={false}
      />
      <directionalLight position={[0, 0, 2]} intensity={5} />
      <directionalLight position={[0, 0, -2]} intensity={5} />


      <group scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_002.geometry}
          material={materials.Default_OBJ}
          scale={0.3}
        />
      </group>
    </group>
  )
}

export default Earth;

useGLTF.preload('../models-3d/earth.glb')

