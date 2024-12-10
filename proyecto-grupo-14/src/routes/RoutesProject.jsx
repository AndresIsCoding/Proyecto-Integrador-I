import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/login/Login";
import Inicio from "../pages/inicio/Inicio";
import Contaminacion from "../pages/contaminacion/contaminacion";
import Escasez from "../pages/escasez/escasez";
import Quiz from "../pages/quiz/Quiz";
import Calificaciones from "../pages/calificaciones/Calificaciones";





const RoutesProject = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>} />
                <Route path="/inicio" element={<Inicio/>} />
                <Route path="/contaminacion" element={<Contaminacion/>} />
                <Route path="/escasez" element={<Escasez/>} />
                <Route path="/quiz" element={<Quiz/>} />
                <Route path="/calificaciones" element={<Calificaciones/>} />

                
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesProject;