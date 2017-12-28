import React, { Component } from "react";
import Navbar from "./components/Navbar";
import TempContainer from "./containers/TempContainer";
import TPLinkContainer from "./containers/TPLinkContainer";

const App = () => (
  <div>
    <div>
      <Navbar />
      <TPLinkContainer />
    </div>
  </div>
);

export default App;
