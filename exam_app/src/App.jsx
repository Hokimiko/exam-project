import { useState } from "react";
import "./App.css";
import LandingPage from "./pages/LandingPage/LandingPage"
import Footer from "./components/Footer/Footer"

function App() {
  return (
    <div className="App">
      <LandingPage/>
      <Footer/>
    </div>
  );
}

export default App;
