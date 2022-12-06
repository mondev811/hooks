import React from "react";
import ReactDOM from "react-dom/client";
// import { CounterApp } from "./01-useState/CounterApp";
import { CounterWithCustomHook } from "./01-useState/CounterWithCustomHook";
import "./index.css";

// import { HooksApp } from "./HooksApp";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <HooksApp /> */}
    {/* <CounterApp /> */}
    <CounterWithCustomHook />
  </React.StrictMode>
);
