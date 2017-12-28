import React, { Component } from "react";
import AppBar from "./components/AppBar";
import TempContainer from "./containers/TempContainer";
import TPLinkContainer from "./containers/TPLinkContainer";
import 'material-design-icons';
import 'typeface-roboto';

const App = () => (
  <div>
    <div>
      <AppBar />
      <TPLinkContainer />
    </div>
  </div>
);

export default App;
