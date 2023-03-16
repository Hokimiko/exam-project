import { useState } from "react";
import "./App.css";
import FlightsSelection from "./components/Card/Flight/flightsSelection/flightsSelection";
import ShowFlight from "./components/Card/Flight/ShowFlight/ShowFlight";
import Review from "./components/Card/Review/Review";
import CardFooter from "./components/CardFooter/CardFooter";
import Footer from "./components/Footer/Footer";
import LandingPage from './pages/LandingPage/LandingPage'

function App() {
  return (
    <div className="App">
        <LandingPage/>
    </div>
  );
}

export default App;
