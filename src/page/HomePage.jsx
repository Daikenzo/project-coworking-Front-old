import React from "react";
import Cookies from "js-cookie";
// Components
import Header from '../components/Header';
import HeaderAdmin from "../components/HeaderAdmin";
import Footer from '../components/Footer';

const HomePage = () =>{
    const login = Cookies.get("jwt");

    if(Cookies.get("jwt") != null){
        console.log("connected")
    } else{
        console.log("not connected")
    }

    return (
        <>
            {login? (<HeaderAdmin/>) : (<Header/>)}
            
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