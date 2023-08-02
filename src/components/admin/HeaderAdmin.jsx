import React from "react";
import { Link, useNavigate } from "react-router-dom";
import LogoContent from "../LogoContent";
import Cookies from "js-cookie";
//Header Components

//Import


const   HeaderAdmin = () =>{
    // Init Navigate & Redirect Link
    const navigate = useNavigate();

    const handleLogout = () => {
        Cookies.remove("jwt");
    
        navigate("/login");
      };

    return (
        <header className="App-header">
            <div className="App-container App-Banner">
                <LogoContent />
            </div>
            <div className="App-header-container App-container">
            <nav className="App-nav">
                <ul>
                    <li>
                        <Link to={"/admin"}>Accueil</Link>
                    </li>
                    <li>
                        <Link to={"/admin/coworkings"}>Liste des coworkings</Link>
                    </li>
                    <li>
                        <Link to={"/admin/coworkings/create"}>Ajouter un coworking</Link>
                    </li>
                    
                    <li>
                        <a href="/login/disconect" onClick={handleLogout}>Déconnection</a>
                    </li>
                </ul>
            </nav>
            </div>
        </header>
    );
};

export default HeaderAdmin;