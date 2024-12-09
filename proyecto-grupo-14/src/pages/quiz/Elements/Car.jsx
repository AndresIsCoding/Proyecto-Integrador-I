import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

const Car = (props) => {
  const { nodes, materials } = useGLTF('../models-3d/Car.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Light004.geometry}
        material={nodes.Light004.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Back_Light.geometry}
        material={nodes.Back_Light.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={nodes.Cube.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001.geometry}
        material={nodes.Cube001.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube002.geometry}
        material={nodes.Cube002.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube003.geometry}
        material={nodes.Cube003.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube004.geometry}
        material={nodes.Cube004.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube005.geometry}
        material={nodes.Cube005.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube006.geometry}
        material={nodes.Cube006.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube007.geometry}
        material={nodes.Cube007.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube_1.geometry}
        material={materials['Car Body']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube_2.geometry}
        material={materials.Material}
      />
    </group>
  )
}

export default Car;

useGLTF.preload('../models-3d/Car.glb')