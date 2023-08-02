import { React, useEffect } from "react";
import Cookies from "js-cookie";
// Components
import Header from '../components/public/Header';
import Footer from '../components/public/Footer';
import { useNavigate } from "react-router-dom";

const HomePage = () =>{
    const navigate = useNavigate();
    const login = Cookies.get("jwt");

    if(Cookies.get("jwt") != null){
        console.log("connected")
    } else{
        console.log("not connected")
    }

    //Redirect if login exist
    useEffect(() => {
        if (Cookies.get("jwt")) {
          navigate("/admin");
        }
    }, []);

    return (
        <>
            {login? (<Header/>) : (<Header/>)}
            
            <main className='App-main'>
                <div className="App-container">
                    Welcome to HomePage
                </div>
            </main>
            <Footer/>
        </>
    );
};

export default HomePage;