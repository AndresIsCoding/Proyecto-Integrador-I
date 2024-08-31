import { useCallback,useEffect  } from "react";
import useAuthStore from "../../stores/use-auth-store";
import UserDAO from "../../daos/UserDAO";
import {useNavigate} from "react-router-dom";
import "./Login.css"

/**
 * Login component that handles user authentication via Google and manages login/logout flows.
 * 
 * @component
 */

const Login = () => {
    // Destructure necessary state and functions from the authentication store
    const {user, loginGoogleWithPopUp,logout,observeAuthState,loading} = useAuthStore();

    // React Router's useNavigate hook for navigation
    const navigate = useNavigate();

    /**
     * useEffect hook to observe the authentication state on component mount.
     * This will set up a listener to observe changes in the user's authentication state.
     */
    useEffect(() =>{
        observeAuthState();
    }, [observeAuthState]);

    useEffect(()=>{
        if(user){
            const newUser = {
                email: user.email,
                name: user.displayName,
                photo: user.photoURL,
            };
            UserDAO.createUser(newUser);
            navigate("/");
        }
    }, [user,navigate]);

    /**
     * Callback function to handle user login using Google.
     * This function is memoized using useCallback to prevent unnecessary re-renders.
     */
    const handleLogin = useCallback(()=>{
        loginGoogleWithPopUp();
    }, [loginGoogleWithPopUp]);

    /**
     * Callback function to handle user logout.
     * This function is memoized using useCallback to prevent unnecessary re-renders.
     */
    const handleLogout = useCallback(()=> {
        logout();
    }, [logout]);

    // Render loading text while authentication state is being determined
    if(loading){
        return <p className="loading-text">Cargando...</p>
    }

    // Render the login or logout UI based on the authentication state
    return(
        <div className="container-login">
            {user ? (
                < >
                    <p className="welcome-text">Bienvenido, {user.displayName}</p>
                    <button className="button-logout" onClick={handleLogout}>Cerrar sesión</button>
                </>
            )   : (
                <button onClick={handleLogin}>Iniciar sesión</button> 
            )}
        </div>

    );
};

export default Login