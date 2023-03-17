
import CardFooter from './Components/Card.footer/CardFooter'
import BookGrid from './Components/Card/Flight/BookFlight/BookGrid'
import Ticket from './Components/Card/Flight/Ticket/Ticket'
import "./App.css";
import LandingPage from "./pages/LandingPage/LandingPage"
import Footer from "./components/Footer/Footer"
import FlightSearch from "./FlightSearch/FlightSearch";


function App() {
  return (
    <div className="App">

            <BookGrid/>

      <LandingPage/>
      <FlightSearch />

    </div>
  );
}

export default App;
