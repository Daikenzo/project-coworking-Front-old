// React Dependance
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const CoworkingsPage = () =>{
    // Initialise UseState Coworking var
    const LocalServer = 'http://localhost:3001'
    const [coworkings, setCoworkings] = useState([]);
    const [deleteCoworkingMessage, setDeleteCoworkingMessage] = useState([])

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
        const responseDelete = await fetch(`${LocalServer}/api/coworkings/${coworkingId}`, {
          method: "DELETE",
        });
    
        const resultDelete = await responseDelete.json();
        
        setDeleteCoworkingMessage(resultDelete.message);
      };
    

    // Load fetch on startup Page
    useEffect(() => {
        fetchCoworkings();
      }, []);

    // Display
    return(
        <>
            <Header />
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
                                <div className="coworking btn deleteBtn">
                                    <button onClick={() => handleDeleteCoworking(coworking.id)}>
                                        Supprimer le coworking
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