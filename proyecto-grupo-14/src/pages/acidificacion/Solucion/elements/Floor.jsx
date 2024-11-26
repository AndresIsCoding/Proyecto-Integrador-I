const Floor = (props) => {
  return (
   <group {...props} dispose={null}> 
    <mesh name="floor" rotation-x={-Math.PI * 0.5} receiveShadow>
      <planeGeometry args={[15, 15]} />
      <meshStandardMaterial color="green" />
    </mesh>
   </group> 
  );
};

export default Floor;
