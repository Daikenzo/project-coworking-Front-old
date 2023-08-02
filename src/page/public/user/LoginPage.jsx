import Cookies from "js-cookie";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../../components/public/Header";
import Footer from "../../../components/public/Footer"
import { useEffect } from "react";

const LoginPage = () => {
  // Init redirect Link
  const navigate = useNavigate();
  // Login SignIn Sumbit
  const handleLoginSubmit = async (event) => {
    event.preventDefault();

    const username = event.target.username.value;
    const password = event.target.password.value;

    const loginResponse = await fetch("http://localhost:3001/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({ username, password }),
    });

    // si la réponse est valide
    if (loginResponse.status === 200) {
      const loginData = await loginResponse.json();

      // je récupère le jwt dans le data
      const jwt = loginData.data;
      console.log(loginData)

      // je stocke le jwt dans un cookie
      
      console.log(jwt)
      Cookies.set("jwt", jwt);
      navigate("/admin")
    }
  };
  //Redirect if login exist
  useEffect(() => {
    if (Cookies.get("jwt")) {
      navigate("/admin");
    }
  }, []);

  return (
    <>
      <Header />
      <main className="App-main login">
        <div className="App-container login">
          {Cookies.get("jwt")? (
          <p>Vous êtes déja connecté</p>
          ) : (
            <form onSubmit={handleLoginSubmit}>
            <div>
              <label htmlFor="username">Username</label>
              <input type="text" name="username" />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input type="password" name="password" />
            </div>
            <input type="submit" />
          </form>
          )}
        
        </div>
      </main>
    
    </>
  );
};

export default LoginPage;