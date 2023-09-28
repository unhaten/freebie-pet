import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Router.tsx";

import "./styles/normalize.css";
import "./styles/global.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

//! FIXME: little empty space between image and lower block (for now i used margin-top: -5) */
//! FIXME: how to deal with pc-mobile different images, cuz on pc it has blank space on the left of the picture */
// ! FIXME: import pic only from public?
