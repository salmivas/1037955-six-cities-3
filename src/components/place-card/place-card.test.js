import React from "react";
import renderer from "react-test-renderer";
import PlaceCard from "./place-card.jsx";

const offer = {offerName: `TestName01`, offerImage: `img/test-image-01.jpg`};

it(`<PlaceCard/> should render a card`, () => {
  const tree = renderer
  .create(<PlaceCard
    offer = {offer}
  />)
  .toJSON();

  expect(tree).toMatchSnapshot();
});
