import { Link } from "react-router-dom";

const Quiz = () => {
    const cameraSettings = { 
      fov: 60,
    };
  
    return (
      <div style={{
        textAlign: "center",
        top: '50%'
        }}>
        <h1>
            Proximamente...
        </h1>

        <Link to="/inicio">Volver al inicio</Link>
        
      </div>
      
    );
  };

export default Quiz;