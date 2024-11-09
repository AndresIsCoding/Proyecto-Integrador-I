
const Lights = () => {
    return (
    <>
     <ambientLight intensity={0.5} color={"white"} />
     <directionalLight position={[10, 10, 5]} intensity={3} color="white" castShadow/>
    </>    
    )
};

export default Lights;