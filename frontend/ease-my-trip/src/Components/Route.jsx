import React from "react";
import { Route, Switch } from "react-router";
import { Flights } from "./Flights";
import { Home } from "./Home";

const Routes = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/flights">
          <Flights />
        </Route>
      </Switch>
    </>
  );
};

export { Routes };
