import React, { Component } from "react";
import Navbar from "./component/Navbar";
import List from "./component/List";
class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <List />
      </>
    );
  }
}

export default App;
