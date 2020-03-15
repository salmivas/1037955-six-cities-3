import React from "react";
import renderer from "react-test-renderer";
import PlaceCard from "./place-card.jsx";

const offer = {
  id: 0,
  image: `img/apartment-01.jpg`,
  premiality: false,
  price: `€100`,
  header: `Beautiful & luxurious apartment at great location`,
  type: `Apartment`,
};

const premiumOffer = {
  id: 0,
  image: `img/apartment-01.jpg`,
  premiality: true,
  price: `€100`,
  header: `Beautiful & luxurious apartment at great location`,
  type: `Apartment`,
};

describe(`GameScreen component render correctly`, () => {
  it(`<PlaceCard/> should render a card`, () => {
    const tree = renderer.create(
        <PlaceCard
          currentCardHoverHandler = {() => {}}
          offer = {offer}
        />)
        .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`<PlaceCard/> should render a premium card`, () => {
    const tree = renderer.create(
        <PlaceCard
          currentCardHoverHandler = {() => {}}
          offer = {premiumOffer}
        />)
        .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
