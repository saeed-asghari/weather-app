import logo from "./logo.svg";
import "./App.css";

import React, { useState, useEffect } from "react";
import { loadProgressBar } from "axios-progress-bar";
import FourDayForecast from "./components/fourdayforecast";


function App() {
  return (
   
      <div id="background-home-page">
          <FourDayForecast />
      </div>
 
  );
}

export default App;
