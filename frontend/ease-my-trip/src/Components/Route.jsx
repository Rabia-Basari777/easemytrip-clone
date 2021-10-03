import React from "react";
import { Route, Switch } from "react-router";
import { Flights } from "./Flights";
import { Home } from "./Home";
import Booking from "./BookingPage";

const Routes = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/flights" exact>
          <Flights />
        </Route>
        <Route path="/flights/bookingpage" exact>
          <Booking />
        </Route>
        <Route path="/flights/bookingpage/travellers">
          <Flights />
        </Route>
      </Switch>
    </>
  );
};

export { Routes };
