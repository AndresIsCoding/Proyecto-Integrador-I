import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/login/Login";
import Inicio from "../pages/inicio/Inicio";
import Contaminacion from "../pages/contaminacion/contaminacion";


const RoutesProject = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>} />
                <Route path="/inicio" element={<Inicio/>} />
                <Route path="/contaminacion" element={<Contaminacion/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesProject;