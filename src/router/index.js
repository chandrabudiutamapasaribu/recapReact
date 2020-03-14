import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../component/Home";
import Login from "../Login";
import Detail from "../component/Detail";
const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/home/:i" component={Detail} />
      </Switch>
    </BrowserRouter>
  );
};
export default Router;
