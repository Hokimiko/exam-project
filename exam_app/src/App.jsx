

import { useState } from 'react'
import './App.css'
import CardFooter from './Components/Card.footer/CardFooter'
import Ticket from './Components/Card/Flight/Ticket/Ticket'
import Footer from './Components/Footer/Footer'

import { useState } from "react";
import "./App.css";
import FlightsSelection from "./components/Card/Flight/flightsSelection/flightsSelection";
import ShowFlight from "./components/Card/Flight/ShowFlight/ShowFlight";
import Review from "./components/Card/Review/Review";
import CardFooter from "./components/CardFooter/CardFooter";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <header>
        <div className="navbar">

        </div>
        <div className="flights_stays">
          <FlightsSelection/>
        </div>
      </header>
      <main>

      </main>
      <footer>
        <div className="footer">
          <Footer/>
        </div>
      </footer>
    </div>
  );
}

export default App;
