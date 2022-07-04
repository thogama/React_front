import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./assets/scss/style.scss";
import App from "./App";
import Loader from "./layouts/loader/Loader";
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Suspense fallback={<Loader />}> 
      <App />
    
  </Suspense>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
