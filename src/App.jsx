import { BrowserRouter, Route, Routes } from "react-router-dom";

//CSS
import './css/App.css';
//Page Components
import HomePage from "./page/HomePage";
import DashboardPage from "./page/admin/DashboardPage";
import CoworkingPage from "./page/admin/Coworking/CoworkingsPage";
import CreateCoworkingPage from "./page/admin/Coworking/CreateCoworkingPage";
import UpdateCoworkingPage from "./page/admin/Coworking/UpdateCoworkingPage";
import LoginPage from "./page/public/user/LoginPage"

import NoPage from "./page/NoPage";

// APP.JS - Brother Router List
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin" element={<DashboardPage />} />
        <Route path="/admin/coworkings" element={<CoworkingPage />} />
        <Route path="/admin/coworkings/create" element={<CreateCoworkingPage />} />
        <Route path="/admin/coworkings/:id" element={<NoPage />} />
        <Route path="/admin/coworkings/:id/Update" element={<UpdateCoworkingPage />} />
        {/*Public */}
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
         {/*Error & Other */}
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
