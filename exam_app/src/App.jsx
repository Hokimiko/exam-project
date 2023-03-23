import "./App.css";
import LandingPage from "./pages/LandingPage/LandingPage";
import FlightSearch from "./pages/FlightSearch/FlightSearch";
import Footer from "./components/Footer/Footer";
import FooterCard from "./components/Footer/FooterCard/FooterCard";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/flight_search" element={<FlightSearch/>}/>
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
