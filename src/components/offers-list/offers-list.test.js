import React from "react";
import renderer from "react-test-renderer";
import OffersList from "./offers-list.jsx";

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

it(`<OffersList/> should render list of offers`, () => {
  const tree = renderer
  .create(<OffersList
    offers = {offers}
  />)
  .toJSON();

  expect(tree).toMatchSnapshot();
});
