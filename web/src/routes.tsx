import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";

import PageHome from "./pages/Home";

import HeaderComponent from "./components/Header" 

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <HeaderComponent />
      <Switch>
        <Route path="/" exact component={PageHome} />
      </Switch>
    </BrowserRouter>
  );
};

export default AppRoutes;


