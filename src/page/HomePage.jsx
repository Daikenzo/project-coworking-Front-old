import React from "react";

// Components
import Header from '../components/Header';
import Footer from '../components/Footer';

const HomePage = () =>{

    return (
        <>
            <Header/>
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