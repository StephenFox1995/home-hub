import React, { Component } from "react";
import Header from "./components/Header";
import TempContainer from "./containers/TempContainer";
import TPLinkContainer from "./containers/TPLinkContainer";

const App = () => (
  <div>
    <div>
      <Header />
    </div>
    <div>
      <TPLinkContainer />
    </div>
  </div>
);

export default App;
