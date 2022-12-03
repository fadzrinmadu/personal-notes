import React from "react";
import { createRoot } from "react-dom/client";

import Main from "./pages";
import "./styles/style.css";

const root = createRoot(document.getElementById("root"));

root.render(<Main />);
