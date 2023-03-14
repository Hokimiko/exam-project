
import { useState } from 'react'
import './App.css'
import CardFooter from './Components/Card.footer/CardFooter'
import Ticket from './Components/Card/Flight/Ticket/Ticket'
import Footer from './Components/Footer/Footer'

function App() {

  return (
    <div className="App">
            <Ticket img="./public/img/turkey.png" city='Istanbul, Turkey' />
            <Ticket img="./public/img/turkey.png" city='Istanbul, Turkey' />
    </div>
    
  )
}

export default App;
