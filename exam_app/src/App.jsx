import { useState } from "react";
import "./App.css";
import FlightsSelection from "./components/Card/Flight/flightsSelection/flightsSelection";
import ShowFlight from "./components/Card/Flight/ShowFlight/ShowFlight";

function App() {
  return <div className="App">
    <FlightsSelection/>
    <ShowFlight/>
  </div>;
}

export default App;
