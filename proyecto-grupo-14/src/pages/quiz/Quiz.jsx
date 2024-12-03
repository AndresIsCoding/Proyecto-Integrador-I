import { Link } from "react-router-dom";
import PContaminacion from "./quiz-contaminacion/PContaminacion";
import Header from "../../components/Header";
import './Quiz.css'
const Quiz = () => { 
    return (
      <>
        <Header/>
        <div className="backgroundQ">
          
          {/*<PContaminacion/> Pregunta de contaminación*/}     
          <div className="intro-quiz">
            <h1>Es momento de que pongas tus conocimientos en practica</h1>
            <Link to="/question-one"><button>Continuar</button></Link>
          </div>
        </div>
      </>

    );
  };

export default Quiz;