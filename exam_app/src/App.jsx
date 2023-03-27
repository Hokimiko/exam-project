
import CardFooter from './Components/Card.footer/CardFooter'
import BookGrid from './Components/Card/Flight/BookFlight/BookGrid'
import Ticket from './Components/Card/Flight/Ticket/Ticket'
import "./App.css";
import LandingPage from "./pages/LandingPage/LandingPage"
import Footer from "./components/Footer/Footer"
import FlightSearch from "./FlightSearch/FlightSearch";
import FightDetail from './pages/FightDetail/FightDetail';
import FightDetailPages from './pages/FightDetailPages/FightDetailPages';
import FightDetailPages2 from './pages/FightDetailPages2/FightDetailPages2';
import FightDetailPages3 from './pages/FightDetailPages3/FightDetailPages3';


function App() {
  return (
    <div className="App">
 
            {/* <BookGrid/> */}

      {/* <LandingPage/> */}
      {/* <FlightSearch />  */}
       <FightDetail/>
       <FightDetailPages/>
       <FightDetailPages2/>
       
       <FightDetailPages3/>
       <FightDetailPages3/>
    </div>
  );
}

export default App;
