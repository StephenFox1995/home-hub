import React, { Component } from "react";
import AppBar from "./components/AppBar";
import TempContainer from "./containers/TempContainer";
import TPLinkContainer from "./containers/TPLinkContainer";

const App = () => (
  <div>
    <div>
      <AppBar />
      <TPLinkContainer />
    </div>
  </div>
);

export default App;
