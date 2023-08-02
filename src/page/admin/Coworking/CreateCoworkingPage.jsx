import { useNavigate } from "react-router-dom";
import HeaderAdmin from "../../../components/admin/HeaderAdmin";
import Footer from "../../../components/public/Footer";
import Cookies from "js-cookie";
import { useEffect } from "react";
import jwtDecode from "jwt-decode";

const CreateCoworkingPage = () =>{
    const navigate = useNavigate();
    const LocalHost = "localhost:3001";

    // Create Coworking actionclick
    const handleCreateCoworking = async (event) => {
      event.preventDefault();

      
      
      // on récupère les infos du form
      const name = event.target.name.value;
      const superficy = event.target.superficy.value;
      const capacity = event.target.capacity.value;
      const price_hour = event.target.price_hour.value;
      const price_day = event.target.price_day.value;
      const price_month = event.target.price_month.value;
      const address_number = event.target.address_number.value;
      const address_street = event.target.address_street.value;
      const address_postcode = event.target.address_postcode.value;
      const address_city = event.target.address_city.value;
  

      // Create API DATA
      const coworkingData = {
        name: name,
        price: {
          hour: parseInt(price_hour),
          day: parseInt(price_day),
          month: parseInt(price_month),
        },
        superficy: parseInt(superficy),
        capacity: parseInt(capacity),
        address: {
          number: parseInt(address_number),
          street: address_street,
          postCode: parseInt(address_postcode),
          city: address_city
        },
      };
  
      console.log(coworkingData);
            // Init Token
      const token = Cookies.get("jwt")
      
      
      // const user = jwtDecode(token)
      // console.log(user)
      // Call POST API function with CoworkingData
      const responseCreate = await fetch(
        `http://${LocalHost}/api/coworkings`, {
        method: "POST",
        body: JSON.stringify(coworkingData),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      // Stock & Redirect into coWorking List
      const responseCreateJs = await responseCreate.json();
      console.log(responseCreateJs) // Test
      navigate("/admin/coworkings");
    };
    // Use Efect 
    useEffect(() => {
      
    }, []);

    // Display Form
    return (
      <>
      <HeaderAdmin />
      <main className="App-main">
        <div className="App-container App-form">
          <form onSubmit={handleCreateCoworking}>
            <div>
              <label htmlFor="name">Name</label>
              <input type="text" name="name" />
            </div>
            <div>
              <label htmlFor="superficy">Superficy</label>
              <input type="number" name="superficy" />
            </div>
            <div>
              <label htmlFor="capacity">Capacity</label>
              <input type="number" name="capacity" />
            </div>
            <div>Prix: 
              <ul>
                <li>
                  <label htmlFor="price_hour">Price by hour</label>
                  <input type="number" name="price_hour" />
                </li>
                <li>
                  <label htmlFor="price_day">Price by day</label>
                  <input type="number" name="price_day" />
                </li>
                <li>
                  <label htmlFor="price_month">Price by month</label>
                  <input type="number" name="price_month" />
                </li>
              </ul>
            </div>
            <div>Adresse :
              <div>
                <label htmlFor="address_number">Address number</label>
                <input type="number" name="address_number" />
              </div>
              <div>
                <label htmlFor="address_street">Address street</label>
                <input type="text" name="address_street" />
              </div>
              <div>
                <label htmlFor="address_postcode">Address zipcode</label>
                <input type="number" name="address_postcode" />
              </div>
              <div>
                <label htmlFor="address_city">Address city</label>
                <input type="text" name="address_city" />
              </div>
            </div>
            <input type="submit" />
          </form>
        </div>
      </main>
      <Footer/>
      </>
    );
};

export default CreateCoworkingPage;