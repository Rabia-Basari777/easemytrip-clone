<<<<<<< HEAD
import logo from "./logo.svg";
import "./App.css";

import { Flights } from "./Components/Flights";
import BookingPage from "./Components/BookingPage";
import Travellers from "./Components/Travellers";

function App() {
  return (
    <div className="App">
      {/* <Flights /> */}
      {/* <BookingPage /> */}
      <Travellers />
    </div>
=======
import { BrowserRouter } from "react-router-dom";
import { Routes } from "./Components/Route";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Routes />
        </div>
      </BrowserRouter>
    </>
>>>>>>> 772bc08431f294685d791e9269e74cedb17598db
  );
}

export default App;

