import React from "react";
import { Link } from "react-router-dom";
import LogoContent from "./LogoContent";
//Header Components

//Import


const   HeaderAdmin = () =>{

    return (
        <header className="App-header">
            <div className="App-container App-Banner">
                <LogoContent />
            </div>
            <div className="App-header-container App-container">
            <nav className="App-nav">
                <ul>
                    <li>
                        <Link to={"/admin/coworkings"}>Liste des coworkings</Link>
                    </li>
                    <li>
                        <Link to={"/admin/coworkings/create"}>Ajouter un coworking</Link>
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

export default HeaderAdmin;