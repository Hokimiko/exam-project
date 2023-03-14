import { useState } from 'react'
import './App.css'
import CardFooter from './Components/Card.footer/CardFooter'
import Footer from './Components/Footer/Footer'

function App() {

  return (
    <div className="App">
      <div>
        <h1>Bektur eblan</h1>
        <p className='read-the-docs'>
          suuuu
        </p>
      </div>

      <p className="read-the-docs">
        idi nahui
      </p>
      <CardFooter/>
      <Footer/>
    </div>
    
  )
}

export default App
