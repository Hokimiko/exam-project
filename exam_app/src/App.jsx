import "./App.css";
import { useState } from "react";
import CvkCard from "./Components/Card/CvkCard/CvkCard";
import Favourites from "./pages/Favourites/Favourites";

function App() {
  return (
    <div className="App">
      <Favourites />
    </div>
  );
}

export default App;
