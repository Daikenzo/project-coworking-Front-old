import React from "react";
import { Link } from "react-router-dom";
import LogoContent from "../LogoContent";
import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";
//Header Components

//Import


const   Header = () =>{
    // Jwt init Decode

    return (
        <header className="App-header">
            <div className="App-container App-Banner">
                <LogoContent />
            </div>
            <div className="App-header-container App-container">
            <nav className="App-nav">
                <ul>
                    <li>
                        <Link to={"/"}>Accueil</Link>
                    </li>
                    <li>
                        <Link to={"/login"}>Connection</Link>
                    </li>
                </ul>
                <div className="App-container login login-message">
                    Connecté en tant que <span>invité</span>
                </div>
            </nav>
            </div>
        </header>
    );
};

export default Header;