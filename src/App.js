import logo from "./logo.svg";
import "./App.css";

import React, { useState, useEffect } from "react";
import { loadProgressBar } from "axios-progress-bar";
import TenDayForeCast from "./components/tenDayForecast";


function App() {
  return (
   
      <div id="background-home-page">
          <TenDayForeCast />
      </div>
 
  );
}

export default App;
