import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/login/Login";
import Inicio from "../pages/inicio/Inicio";
import Contaminacion from "../pages/contaminacion/contaminacion";
import Escasez from "../pages/escasez/escasez";


const RoutesProject = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>} />
                <Route path="/inicio" element={<Inicio/>} />
                <Route path="/contaminacion" element={<Contaminacion/>} />
                <Route path="/escasez" element={<Escasez/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesProject;