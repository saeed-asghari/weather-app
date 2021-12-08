import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'axios-progress-bar/dist/nprogress.css'
import { useSelector, Provider } from "react-redux";
import configureStore from "./store/configureStore";
import { loadWeather } from "./store/weather";
const store = configureStore();
// UI Layer
store.dispatch(loadWeather());

ReactDOM.render(
  <React.StrictMode>
     <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
