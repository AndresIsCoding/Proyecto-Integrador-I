import { Html } from "@react-three/drei";

const Header = () => {
    return(
        < >
            <Html>
                <header>
                    <div class="logo">
                        <img src="../images/Logo.png" alt="logo"/>
                    </div>
                    <div>
                        <nav>
                            <a href="" class="nav-link">Inicio</a>
                            <a href="" class="nav-link">Contaminacion</a>
                            <a href="" class="nav-link">Escasez</a>
                            <a href="" class="nav-link">Acidificacion</a>
                        </nav>
                    </div>
                </header>
            </Html>
        </>
    )
}

export default Header;