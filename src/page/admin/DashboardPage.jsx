import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
// Display Components
import HeaderAdmin from "../../components/admin/HeaderAdmin";
import Footer from "../../components/public/Footer";
import "../../css/App.css"
import jwtDecode from "jwt-decode";

const DashboardPage = () => {

  // Redirect if logOut
  const navigate = useNavigate();

    useEffect(() => {
      // Check jwt User Value
      const jwt = Cookies.get("jwt");
      if (!jwt) { navigate("/login")} // Redirect if not connected
      // Decode jwt User Value
      console.log(jwt)
      const user = !jwt? (null) : jwtDecode(jwt);
      // Check Role User & Redirect if role = user
      if (user.data.role === 1) {
          navigate("/");
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