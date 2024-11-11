import React from 'react';
import { OrbitControls, useGLTF } from '@react-three/drei';

const Earth = ({ onCountryClick, ...props }) => {
  const { nodes, materials } = useGLTF('../models-3d/earth.glb');

  const handleCountryClick = (country) => {
    if (onCountryClick) {
      onCountryClick(country);
    }
  };

  return (
    <group {...props} dispose={null}>
      <OrbitControls
        autoRotate={true}
        enableZoom={false}
        enablePan={false}
      />
      <directionalLight position={[0, 0, 2]} intensity={5} />
      <directionalLight position={[0, 0, -2]} intensity={9} />

      {/* Malla principal de la Tierra */}
      <group scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_002.geometry}
          material={materials.Default_OBJ}
          scale={0.36}
        />
      </group>

      {/* Pines interactivos para los países */}
      <group>
        {/* Pin para India */}
        <mesh
          onPointerDown={() => handleCountryClick('India')}
          position={[1, 1.5, 0.5]} // Posición en Y igual a la de USA
          scale={[1, 0.5, 1]} // Escala igual a la de USA
          rotation={[Math.PI, 0, 0]} // Rota el cono 180 grados en el eje X
        >
          <coneGeometry args={[0.1, 0.3, 32]} />
          <meshStandardMaterial color="red" />
        </mesh>

        {/* Pin para China */}
        <mesh
          onPointerDown={() => handleCountryClick('China')}
          position={[0.3, 1.75, 0.6]} // Posición en Y igual a la de USA
          scale={[1, 0.5, 1]} // Escala igual a la de USA
          rotation={[Math.PI, 0, 0]} // Rota el cono 180 grados en el eje X
        >
          <coneGeometry args={[0.1, 0.3, 32]} />
          <meshStandardMaterial color="blue" />
        </mesh>

        {/* Pin para USA */}
        <mesh
          onPointerDown={() => handleCountryClick('USA')}
          position={[-0.5, 1.75, -0.3]} // Posición y escala como referencia
          scale={[1, 0.5, 1]}
          rotation={[Math.PI, 0, 0]} // Rota el cono 180 grados en el eje X
        >
          <coneGeometry args={[0.1, 0.3, 32]} />
          <meshStandardMaterial color="green" />
        </mesh>
      </group>
    </group>
  );
};

export default Earth;

useGLTF.preload('../models-3d/earth.glb');
