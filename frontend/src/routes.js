import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Logon from "./pages/logon";
import Register from "./pages/register";
import Profile from "./pages/profile";
import NewIncident from "./pages/newIncident";
export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Logon} exact />
        <Route path="/register" component={Register} exact />
        <Route path="/profile" component={Profile} exact />
        <Route path="/incidents/new" component={NewIncident} exact />
      </Switch>
    </BrowserRouter>
  );
}
