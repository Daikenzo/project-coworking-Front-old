// React Dependance
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link, Navigate } from "react-router-dom";
import '../css/App.css'
import HeaderAdmin from "../components/HeaderAdmin";
import Cookies from "js-cookie";

const CoworkingsPage = () =>{
    // Initialise UseState Coworking var
    const LocalServer = 'http://localhost:3001'
    const [coworkings, setCoworkings] = useState([]);
    const [deleteCoworkingMessage, setDeleteCoworkingMessage] = useState([])
    // const [updateCoworkingMessage, setUpdateCoworkingMessage] = useState([])

    // Fetch Coworking API
    const fetchCoworkings = async () => {
        
        // port Use: 3001
        const response = await fetch(`${LocalServer}/api/coworkings`);
         // Response JS transform
        const result = await response.json();

        // store result
        setCoworkings(result.data);
    };

    // Delette Coworking
    const handleDeleteCoworking = async (coworkingId) => {
        const token = Cookies.get("jwt");
        const responseDelete = await fetch(`${LocalServer}/api/coworkings/${coworkingId}`, {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          }
        });
    
        const resultDelete = await responseDelete.json();
        
        setDeleteCoworkingMessage(resultDelete.message);
    };
    // Delette Coworking
    const handleUpdateCoworking = (coworkingId) => {
        

        console.log(coworkingId);
        console.log(`/coworkings/${coworkingId}/update`);
    };
    

    // Load fetch on startup Page
    useEffect(() => {
        fetchCoworkings();
      }, [deleteCoworkingMessage]);

    // Display
    return(
        <>
            <HeaderAdmin />
            <main className="App-main">
                <div className="App-container">
                    {deleteCoworkingMessage && <p>{deleteCoworkingMessage}</p>}
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
                                <div className="coworking btn ">
                                    <button className="Btn deleteBtn" onClick={() => handleDeleteCoworking(coworking.id)}>
                                        Supprimer le coworking
                                    </button>
                                    <button className="Btn deleteBtn">
                                        <Link className="Btn App-link"to={`/admin/coworkings/${coworking.id}/update`}>
                                            Mettre à jour le coworking
                                        </Link>
                                    </button>
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

export default CoworkingsPage;