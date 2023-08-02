import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
// Display Components
import HeaderAdmin from "../../components/admin/HeaderAdmin";
import Footer from "../../components/public/Footer";

const DashboardPage = () => {

  // Redirect if logOut
  const navigate = useNavigate();

  useEffect(() => {
    if (!Cookies.get("jwt")) {
      navigate("/login");
    }
  }, []);

  return (
    <>
      <HeaderAdmin />
      <main className="App-main dashboard">
        <div className="App-container">
          <h2>Bonjour, Vous êtes sur le dashboard</h2>
        </div>
      
      </main>
      <Footer/>
    </>
  );
};

export default DashboardPage;