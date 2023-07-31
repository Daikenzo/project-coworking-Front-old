import { BrowserRouter, Route, Routes } from "react-router-dom";

//CSS
import './css/App.css';
//Page Components
import HomePage from "./page/HomePage";
import CoworkingPage from "./page/CoworkingsPage";
import CreateCoworkingPage from "./page/CreateCoworkingPage";

// APP.JS - Brother Router List
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/coworkings" element={<CoworkingPage />} />
        <Route path="/coworkings/create" element={<CreateCoworkingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
