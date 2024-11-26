import React, { useRef } from 'react'
import { OrbitControls, useGLTF } from '@react-three/drei'

const PlasticB = (props) => {
  const { nodes, materials } = useGLTF('../models-3d/PlasticB.glb')
  return (
    <group {...props} dispose={null}>
      <OrbitControls
        autoRotate={false}
        enableZoom={false}
        enablePan={false}
        enableRotate={true}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle023.geometry}
        material={materials.bottle}
        position={[0.006, 0.048, 0]}
        scale={0.005}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle022.geometry}
          material={materials.krishka}
          position={[0, 5.934, -0.008]}
          scale={[0.822, 0.559, 0.822]}
        />
      </mesh>
    </group>
  )
}

export default PlasticB;

useGLTF.preload('../models-3d/PlasticB.glb')
