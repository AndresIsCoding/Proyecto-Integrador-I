import React, { useRef } from 'react'
import { OrbitControls, useGLTF } from '@react-three/drei'

const OilBarrel = (props) => {
  const { nodes, materials } = useGLTF('../models-3d/OilBarrel.glb')
  return (
    <group {...props} dispose={null}>
      <OrbitControls
       autoRotate={true}
       enableZoom={false}
       enablePan={false}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oil_Barell_GEO.geometry}
        material={materials.oil_barell}
      />
    </group>
  )
}

export default OilBarrel

useGLTF.preload('../models-3d/OilBarrel.glb')
