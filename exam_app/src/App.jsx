import { useState } from "react";
import "./App.css";
import FightDetail from './pages/FightDetail/FightDetail';
import FightDetailPages from './pages/FightDetailPages/FightDetailPages';
import FightDetailPages2 from './pages/FightDetailPages2/FightDetailPages2';
import FightDetailPages3 from './pages/FightDetailPages3/FightDetailPages3';
import LandingPage from "./pages/LandingPage/LandingPage";
import FlightSearch from "./pages/FlightSearch/FlightSearch";
import Footer from "./components/Footer/Footer";
import FooterCard from "./components/Footer/FooterCard/FooterCard";
import { Route, Routes } from "react-router-dom";
import FlightListing from "./pages/FlightListing/FlightListing";
import Backdrop from "./components/UI/Backdrop/Backdrop";
import SignUp from "./components/Form/SignUp/SignUp";

function App() {
  return (
    <div className="App">
      {/* <Backdrop/> */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/flight_search" element={<FlightSearch />} />
        <Route path="/flight_listing" element={<FlightListing />} />
        <Route path="/sign_up" element={<SignUp />} />
      </Routes>

      <div className="footer">
        <div className="footer_card">
          <FooterCard />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
