import { React } from "react";
import "./global.css";
import "./styleguide.css";
import ReactDOM from "react-dom/client";
import App from "./App";

const app = document.getElementById("app");
const root = ReactDOM.createRoot(app);
root.render(<App />);
