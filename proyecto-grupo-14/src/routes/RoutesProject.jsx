import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/login/Login";
import Inicio from "../pages/inicio/Inicio";

const RoutesProject = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>} />
                <Route path="/inicio" element={<Inicio/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesProject;