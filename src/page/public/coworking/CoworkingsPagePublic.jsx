// React Dependance
import React, { useEffect, useState } from "react";
import Header from "../../../components/public/Header";
import Footer from "../../../components/public/Footer";
import { Link, useNavigate } from "react-router-dom";
import '../../../css/App.css'
import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";

const CoworkingsPagePublic = () =>{
    // Initialise UseState Coworking var
    const LocalServer = 'http://localhost:3001'
    const navigate = useNavigate();
    const [coworkings, setCoworkings] = useState([]);

    // Fetch Coworking API
    const fetchCoworkings = async () => {
        
        // port Use: 3001
        const response = await fetch(`${LocalServer}/api/coworkings`);
         // Response JS transform
        const result = await response.json();

        // store result
        setCoworkings(result.data);
    };

    // Load fetch on startup Page
    useEffect(() => {
        // Fetch Coworking List
        fetchCoworkings();
      }, []);
    

    // Display
    return(
        <>
            <Header />
            <main className="App-main">
                <div className="App-container">
                    {coworkings.map((coworking)=>{
                        return(
                            <div className="Coworking" 
                            key={coworking.id}>
                                <h2>{coworking.name}</h2>
                                <div className="Coworking Coworking-Info">
                                    <h4>Adresse :</h4>
                                    <p>
                                        {coworking.address.number} {coworking.address.street}
                                    </p>
                                    <p>
                                        {coworking.address.postcode} {coworking.address.city}
                                    </p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </main>
            <Footer/>
        </>
    )
}

export default CoworkingsPagePublic;