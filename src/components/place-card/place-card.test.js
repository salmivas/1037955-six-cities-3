import React from "react";
import renderer from "react-test-renderer";
import PlaceCard from "./place-card.jsx";

const offer = {
  offerImage: `img/apartment-01.jpg`,
  offerPremiality: false,
  offerPrice: `€100`,
  offerHeader: `Beautiful & luxurious apartment at great location`,
  offerType: `Apartment`,
};

it(`<PlaceCard/> should render a card`, () => {
  const tree = renderer
  .create(<PlaceCard
    onHover = {() => {}}
    offer = {offer}
  />)
  .toJSON();

  expect(tree).toMatchSnapshot();
});
