import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";

const Settings = {
  OFFERS_COUNT: 400
};

const offers = [
  {
    offerImage: `img/apartment-01.jpg`,
    offerPremiality: false,
    offerPrice: `€100`,
    offerHeader: `Beautiful & luxurious apartment at great location`,
    offerType: `Apartment`,
  },
  {
    offerImage: `img/apartment-02.jpg`,
    offerPremiality: true,
    offerPrice: `€200`,
    offerHeader: `Beautiful & luxurious apartment at great location`,
    offerType: `House`,
  },
];

it(`<PlaceCard/> should render`, () => {
  const tree = renderer
  .create(<Main
    offersCount = {Settings.OFFERS_COUNT}
    offers = {offers}
    onLocationItemLinkClick = {() => {}}
  />)
  .toJSON();

  expect(tree).toMatchSnapshot();
});
