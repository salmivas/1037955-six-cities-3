import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";

const Settings = {
  OFFERS_COUNT: 400
};

const offers = [
  {offerName: `OfferName01`, offerImage: `img/offer-image-01.jpg`},
  {offerName: `OfferName02`, offerImage: `img/offer-image-02.jpg`},
];

it(`<PlaceCard/> should render`, () => {
  const tree = renderer
  .create(<Main
    offersCount = {Settings.OFFERS_COUNT}
    offers = {offers}
  />)
  .toJSON();

  expect(tree).toMatchSnapshot();
});
