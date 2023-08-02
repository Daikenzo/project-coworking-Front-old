// React Dependance
import React, { useEffect, useState } from "react";
import Header from "../../../components/public/Header";
import Footer from "../../../components/public/Footer";
import { Link, useNavigate } from "react-router-dom";
import '../../../css/App.css'
import HeaderAdmin from "../../../components/admin/HeaderAdmin";
import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";

const CoworkingsPage = () =>{
    // Initialise UseState Coworking var
    const LocalServer = 'http://localhost:3001'
    const navigate = useNavigate();
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

        // Check jwt User Value
        const jwt = Cookies.get("jwt");
        if (!jwt) { navigate("/login")} // Redirect if not connected
        // Decode jwt User Value
        console.log(jwt)
        const user = jwtDecode(jwt);
        // Check Role User & Redirect if role = user
        if (user.data.role === 1) {
            navigate("/");
          }


        // Fetch Coworking List
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