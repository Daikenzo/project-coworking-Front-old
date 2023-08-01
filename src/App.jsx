import { BrowserRouter, Route, Routes } from "react-router-dom";

//CSS
import './css/App.css';
//Page Components
import HomePage from "./page/HomePage";
import CoworkingPage from "./page/CoworkingsPage";
import CreateCoworkingPage from "./page/CreateCoworkingPage";
import UpdateCoworkingPage from "./page/UpdateCoworkingPage";
import LoginPage from "./page/Users/LoginPage"

import NoPage from "./page/NoPage";

// APP.JS - Brother Router List
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin/coworkings" element={<CoworkingPage />} />
        <Route path="/admin/coworkings/create" element={<CreateCoworkingPage />} />
        <Route path="/admin/coworkings/:id" element={<NoPage />} />
        <Route path="/admin/coworkings/:id/Update" element={<UpdateCoworkingPage />} />

        <Route path="/login" element={<LoginPage />} />

        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
