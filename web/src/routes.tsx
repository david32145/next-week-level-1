import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";

import PageHome from "./pages/Home";

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={PageHome} />
      </Switch>
    </BrowserRouter>
  );
};

export default AppRoutes;
