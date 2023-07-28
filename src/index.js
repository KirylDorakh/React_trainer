import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";

import "bootstrap/dist/css/bootstrap.min.css"

import App from "./components/App"

const container = document.getElementById("root")
const root = createRoot(container)
root.render(<App />);

// ReactDOM.render(<App/>, document.getElementById("root"))
