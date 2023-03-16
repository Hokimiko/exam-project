import { useState } from 'react'
import './App.css'
import CardFooter from './Components/Card.footer/CardFooter'
import BookGrid from './Components/Card/Flight/BookFlight/BookGrid'
import Ticket from './Components/Card/Flight/Ticket/Ticket'
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <div className="App">
            <BookGrid/>
    </div>
  );
}

export default App;
