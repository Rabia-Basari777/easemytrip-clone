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
  );
}

export default App;
