import React from "react";
import ReactDom from "react-dom";
import App from "./components/app/app.jsx";

const Settings = {
  OFFERS_COUNT: 400
};

const offers = [
  {offerName: `Beautiful & luxurious apartment at great location`, offerImage: `img/apartment-01.jpg`},
  {offerName: `Wood and stone place`, offerImage: `img/room.jpg`},
];

ReactDom.render(
    <App
      offersCount = {Settings.OFFERS_COUNT}
      offers = {offers}
    />,
    document.querySelector(`#root`)
);
