import React from "react";
import ReactDOM from "react-dom/client";
// import { FormWithCustomHook } from "./02-useEffect/FormWithCustomHook";
import { MultipleCustomHooks } from "./03-examples/MultipleCustomHooks";
// import { SimpleForm } from "./02-useEffect/SimpleForm";
// import { CounterApp } from "./01-useState/CounterApp";
// import { CounterWithCustomHook } from "./01-useState/CounterWithCustomHook";
import "./index.css";

// import { HooksApp } from "./HooksApp";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  //   <HooksApp />
  //   <CounterApp />
  //   <CounterWithCustomHook />
  //   <SimpleForm />
  // </React.StrictMode>
  // <SimpleForm />
  // <FormWithCustomHook />
  <MultipleCustomHooks />
);
