import React from "react";
import { Link } from "react-router-dom";
import LogoContent from "../LogoContent";
//Header Components

//Import


const   Header = () =>{

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
            </nav>
            </div>
        </header>
    );
};

export default Header;