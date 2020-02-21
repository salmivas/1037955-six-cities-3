import React from "react";
import renderer from "react-test-renderer";
import PlaceCard from "./place-card.jsx";

const offer = {
  image: `img/apartment-01.jpg`,
  premiality: false,
  price: `€100`,
  header: `Beautiful & luxurious apartment at great location`,
  type: `Apartment`,
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
