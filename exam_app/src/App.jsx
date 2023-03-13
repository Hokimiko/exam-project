import { useState } from "react";
import "./App.css";
import ShowFlight from "./components/Card/Flight/ShowFlight/ShowFlight";
import Flight from "../public/img/Flight.jpg";
import Hotels from "../public/img/Hotels.jpg";

function App() {
  return (
    <div className="App">
      <div className="cards">
        <ShowFlight subject="Flight" value="Show Flight" img={Flight} />
        <ShowFlight subject="Hotels" value="Show Hotels" img={Hotels} />
      </div>
    </div>
  );
}

export default App;
