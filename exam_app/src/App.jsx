import React from "react";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import FooterCard from "./components/Footer/FooterCard/FooterCard";
import SignUp from "./components/Form/SignUp/SignUp";
import Layout from "./components/UI/Layout/Layout";
import MultiRangeSlider from "./components/UI/multiRangeSlider/MultiRangeSlider";
import FlightListing from "./pages/FlightListing/FlightListing";
import FlightSearch from "./pages/FlightSearch/FlightSearch";
import LandingPage from "./pages/LandingPage/LandingPage";
import Account from "./pages/Accounts/Account/Account";
import AccountFlow from "./pages/Accounts/AccountFlow/AccountFlow";
import AccountBCard from "./pages/Accounts/AccountBCard/AccountBCard";
import HotelListing from "./pages/HotelListing/HotelListing";

function App() {
  return (
    <div className="App">
      <Layout>
        <Layout>
          <Routes>
            <Route path="/sign_up" element={<SignUp />} />
          </Routes>
        </Layout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/flight_search" element={<FlightSearch />} />
          <Route path="/flight_listing" element={<FlightListing />} />


          <Route path="/account" element={<Account/>}/>
        </Routes>

      </Layout>

      {/* <HotelListing/> */}

    </div>
  );
}

export default App;




  {/* <div className="account">
    <Routes>
    </Routes>
  </div> */}

  {/* <footer>
      <div className="card_footer">
        <FooterCard />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </footer> */}