import React from "react";
import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom";

import PageHome from "./pages/Home";
import NewPointPage from "./pages/NewPoint"


const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/home" exact component={PageHome} />
        <Route path="/point/new" exact component={NewPointPage} />
        <Route path="*" >
          <Redirect to="/home" />
        </Route>/
      </Switch>
    </BrowserRouter>
  );
};

export default AppRoutes;
