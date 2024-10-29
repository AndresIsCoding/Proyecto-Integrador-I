import { Link} from 'react-router-dom';
import '../styles/Header.css'
import Navbar from './Navbar';

const Header = () => {
  return (
    <>
      <Navbar/>
      <header>
        <div className="logo">
          <img src="../images/DarkLogo.png" alt="logo" />
        </div>
        <nav>
          <Link to="/inicio">Inicio</Link>
          <Link to="/contaminacion">Contaminación</Link>
          <Link to="/escasez">Escasez</Link>
          <Link to="/acidificacion">Acidificación</Link>
          <Link to="/quiz">Quiz</Link>
          <Link to="/calificaciones">Calificaciones</Link>
        </nav>
      </header>
    </>
  );
};

export default Header;
