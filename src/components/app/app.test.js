import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

const Settings = {
  OFFERS_COUNT: 400
};

const offers = [
  {offerName: `OfferName01`, offerImage: `img/offer-image-01.jpg`},
  {offerName: `OfferName02`, offerImage: `img/offer-image-02.jpg`},
];

it(`<App/> should render an entire app`, () => {
  const tree = renderer
  .create(<App
    offersCount = {Settings.OFFERS_COUNT}
    offers = {offers}
  />)
  .toJSON();

  expect(tree).toMatchSnapshot();
});
