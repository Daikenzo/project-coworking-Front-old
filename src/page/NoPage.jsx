import Footer from "../components/public/Footer";
import Header from "../components/public/Header"

const NoPage = () =>{

    return (
        <>
            <Header/>
            <main className="App-main">
                <div className="App-container">
                    <h2>Erreur de chargement</h2>
                    <p>La Page que vous voulez atteindre n'existe pas.</p>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default NoPage;