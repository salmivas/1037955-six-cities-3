import React from "react";
import renderer from "react-test-renderer";
import OffersList from "./offers-list.jsx";

const offers = [
  {
    image: `img/apartment-01.jpg`,
    premiality: false,
    price: `€100`,
    header: `Beautiful & luxurious apartment at great location`,
    type: `Apartment`,
  },
  {
    image: `img/apartment-02.jpg`,
    premiality: true,
    price: `€200`,
    header: `Beautiful & luxurious apartment at great location`,
    type: `House`,
  },
];

it(`<OffersList/> should render list of offers`, () => {
  const tree = renderer
  .create(<OffersList
    offers = {offers}
  />)
  .toJSON();

  expect(tree).toMatchSnapshot();
});
