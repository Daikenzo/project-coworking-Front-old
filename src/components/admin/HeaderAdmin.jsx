import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// cookie & Jwt decode Function
import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";
//Import
import LogoContent from "../LogoContent";
//Header Components
const   HeaderAdmin = () =>{
    const [user, getUser] = useState({data:{username:'invité'}})
    // Init Navigate & Redirect Link
    const navigate = useNavigate();

    
    // Remove Jwt
    const handleLogout = () => {
        Cookies.remove("jwt");
    
        navigate("/login");
    };

    const jwt = Cookies.get("jwt");
    if (jwt) {
        getUser(jwtDecode(jwt))
    }else{
        navigate("/login");
    }

    
    useEffect(() => {
        const jwt = Cookies.get("jwt");

    // s'il existe pas, ça veut que l'utilisateur n'est pas connecté
    // on le redirige vers la page de login
    if (!jwt) {
      navigate("/login");
    }

    // on décode le jwt
    const user = !jwt && jwtDecode(jwt);

    // si l'utilisateur a le rôle user
    // on le redirige vers l'accueil public
    if (user.data.role === 1) {
      navigate("/");
    } 
    }, []);


    return (
        <header className="App-header">
            <div className="App-container App-Banner">
                <LogoContent />
            </div>
            <div className="App-header-container App-container">
            <nav className="App-nav">
                <ul>
                    <li>
                        <Link to={"/admin"}>Acceuil</Link>
                    </li>
                    <li>
                        <Link to={"/admin/coworkings"}>Liste des coworkings</Link>
                    </li>
                    <li>
                        <Link to={"/admin/coworkings/create"}>Ajouter un coworking</Link>
                    </li>
                    <li className="login">
                        <a href="/login#disconect" onClick={handleLogout}>Déconnection</a>
                    </li>
                </ul>
                <div className="App-container login login-message">Connecté en tant que {user.data.username}</div>
            </nav>
            </div>
        </header>
    );
};

export default HeaderAdmin;