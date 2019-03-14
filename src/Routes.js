import React from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard";
import Form from "./Components/Form/Form";

export default (
  <Switch>
    <Route component={Dashboard} exact path="/" />

    <Route component={Form} path="/Addinventory" />
    <Route component={Form} path="/edit/:id" />
  </Switch>
);
