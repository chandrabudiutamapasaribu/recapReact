import React, { Component } from "react";
import Home from "./component/Home";
import Login from "./Login";
import Detail from "./component/Detail";
import { Route, Switch } from "react-router-dom";
import Routes from "./router/index";

class App extends Component {
  render() {
    return (
      <>
        <Routes />
      </>
    );
  }
}

export default App;
