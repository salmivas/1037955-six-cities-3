import React from "react";
import ReactDom from "react-dom";
import App from "./components/app/app.jsx";
import offers from "./mocks/offers.js";

const Settings = {
  OFFERS_COUNT: 400
};

ReactDom.render(
    <App
      offersCount = {Settings.OFFERS_COUNT}
      offers = {offers}
    />,
    document.querySelector(`#root`)
);
