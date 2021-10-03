
import { BrowserRouter } from "react-router-dom";
import { Routes } from "./Components/Route";
// import BookingPage from "./Components/BookingPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          <Routes />
          {/* <BookingPage /> */}
        </div>
      </BrowserRouter>
    </>

  );
}

export default App;

