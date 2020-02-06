import React from "react";
import ReactDom from "react-dom";
import App from "./components/app/app.jsx";

const Settings = {
  OFFERS_COUNT: 500
};

ReactDom.render(
    <App offersCount = {Settings.OFFERS_COUNT}/>,
    document.querySelector(`#root`)
);
