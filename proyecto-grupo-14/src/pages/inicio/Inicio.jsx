import { Canvas } from "@react-three/fiber";
import './Inicio.css';
import Header from "../../components/Header.jsx";
import Earth from "./Earth.jsx";
import Card from "../../components/Card.jsx";
import { useNavigate } from "react-router-dom";

const Inicio = () => {
  const navigate = useNavigate();

  const handleLinkClick = (path) => {
    window.scrollTo(0, 0);
    navigate(path);
  };

  const cameraSettings = {
    fov: 60,
  };

  const handleCountryClick = (country) => {
    switch (country) {
      case "India":
        handleLinkClick("/escasez");
        break;
      case "China":
        handleLinkClick("/contaminacion");
        break;
      case "USA":
        handleLinkClick("/acidificacion");
        break;
      default:
        break;
    }
  };

  return (
    <div className="main-container">
      <Header />
      <Canvas
        className="canvas-inicio"
        camera={cameraSettings}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Earth position={[0, 0, 0]} onCountryClick={handleCountryClick} />
      </Canvas>

      <div className="main-title">
        <h1>Solo podemos <br />beber menos del <br />1%</h1>
      </div>

      <div className="title1">
        <h2>Aunque cubra el 70% del planeta...</h2>
      </div>

      <div className="small-text">
        <h2 className="title3">¿Porque saber esto es importante?</h2>
        <p className="paragraph">
          Se estima que para 2050 aproximadamente 6000 millones<br /> de personas
          sufrirán de escasez de agua debido<br />al aumento de los niveles de contaminación.<br />
          <span className="country-india">India</span>: Escasez de agua debido a sequías y alta demanda <br />
          <span className="country-china">China</span>: Problemas de contaminación en cuerpos de agua. <br />
          <span className="country-usa">USA</span>: Acidificación de océanos por emisiones de carbono. <br />
        </p>

      </div>

      <div className="second-container">
        <h2 className="title2">Pero ese no es el único problema</h2>
        <div className="intro-contamincacion">
          {/* Contaminación */}
          <Card>
            <iframe
              className="video-contaminacion"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/7P4rBeQ4oZo?si=ftdmEVBuiQozJN5B"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
            <div className="card-content">
              <h3>Contaminación</h3>
              <p>
                Cada día, 2 millones de toneladas de aguas residuales desembocan en las aguas del mundo, según datos de la ONU.
              </p>
              <button onClick={() => handleLinkClick("/contaminacion")}>
                ¿Quieres saber más? Click aquí
              </button>
            </div>
          </Card>

          {/* Escasez */}
          <Card>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/xogbKB-93s4?si=IVrld1gY4XbnihYy&amp;controls=0"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
            <div className="card-content">
              <h3>Escasez</h3>
              <p>
                Los recursos de agua dulce por persona se han reducido un 20 por ciento en los últimos 20 años. A su vez, la disponibilidad y calidad empeoran rápidamente.
              </p>
              <button onClick={() => handleLinkClick("/escasez")}>
                ¿Quieres saber más? Click aquí
              </button>
            </div>
          </Card>

          {/* Acidificación */}
          <Card>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/Z-OSbwJEIbc?si=ExuUpMQnvWJ0oA3x&amp;controls=0"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
            <div className="card-content">
              <h3>Acidificación de los océanos</h3>
              <p>
                Es una consecuencia directa de la quema de combustibles fósiles y la contaminación por carbono.
              </p>
              <button onClick={() => handleLinkClick("/acidificacion")}>
                ¿Quieres saber más? Click aquí
              </button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Inicio;
