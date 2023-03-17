import { useState } from "react";
import "./App.css";
import LandingPage from "./pages/LandingPage/LandingPage"
import Footer from "./components/Footer/Footer"
import FlightSearch from "./FlightSearch/FlightSearch";

function App() {
  return (
    <div className="App">
      <LandingPage/>
      <FlightSearch />
    </div>
  );
}

export default App;
