import { useNavigate, useParams} from "react-router-dom";
import { useEffect, useState } from "react";

// Components
import Header from '../components/Header';
import Footer from '../components/Footer';
// If error
import NoPage from "./NoPage";

const UpdateCoworkingPage = () =>{
    const navigate = useNavigate();
    const LocalHost = "localhost:3001";

    // Récupération de l'id
    const { id } = useParams();
    // Init coworking set
    const [coworking, setCoworking] = useState(null);

    // Fill Id coworking Data
    const fetchCoworking = async () =>{
        const responseCoworking = await fetch(`http://${LocalHost}/api/coworkings/${id}`)
        const responseCoworkingJs = await responseCoworking.json();
        // stockage result

        // If 404 error, redirect to error page
        // if(!responseCoworkingJs.data){
        //     navigate(`/coworkings/${id}/update/404`)
        // }
        setCoworking(responseCoworkingJs.data);
    }

        // Refrech Components with Data
        useEffect(()=>{
            fetchCoworking();
        }, []);




    return (
        <>
            {!coworking? (<> <NoPage /> </>) : (
            <>
                <Header />
                <main className="App-main">
                    <div className="App-container App-form">
                        <h3>Modification du coworking N°{id}</h3>
                        <form >
                            <div>
                              <label htmlFor="name">Nom</label>
                              <input type="text" name="name" defaultValue={coworking && coworking.name}/>
                            </div>
                            <div>
                              <label htmlFor="superficy">Superficie</label>
                              <input type="number" name="superficy" defaultValue={coworking && coworking.superficy}/>
                            </div>
                            <div>
                              <label htmlFor="capacity">Capacité</label>
                              <input type="number" name="capacity" defaultValue={coworking && coworking.capacity}/>
                            </div>
                            <div>Prix: 
                              <ul>
                                <li>
                                  <label htmlFor="price_hour">Prix à l'heure</label>
                                  <input type="number" name="price_hour" defaultValue={coworking && coworking.price_hour}/>
                                </li>
                                <li>
                                  <label htmlFor="price_day">Prix au jour</label>
                                  <input type="number" name="price_day" defaultValue={coworking && coworking.price_day}/>
                                </li>
                                <li>
                                  <label htmlFor="price_month">Prix par mois</label>
                                  <input type="number" name="price_month" defaultValue={coworking && coworking.price_month}/>
                                </li>
                              </ul>
                            </div>
                            <div>Adresse :
                              <div>
                                <label htmlFor="address_number">Numéro </label>
                                <input type="number" name="address_number" defaultValue={coworking && coworking.address_number}/>
                              </div>
                              <div>
                                <label htmlFor="address_street">Nom de la rue</label>
                                <input type="text" name="address_street" defaultValue={coworking && coworking.address_street}/>
                              </div>
                              <div>
                                <label htmlFor="address_postcode">Code Postale</label>
                                <input type="number" name="address_postcode" defaultValue={coworking && coworking.address_postcode}/>
                              </div>
                              <div>
                                <label htmlFor="address_city">Ville</label>
                                <input type="text" name="address_city" defaultValue={coworking && coworking.address_city}/>
                              </div>
                            </div>
                            <input type="submit" />
                        </form>
                    </div>
                </main>
                <Footer />
            </>
        )}
        </>
    );
};

export default UpdateCoworkingPage;