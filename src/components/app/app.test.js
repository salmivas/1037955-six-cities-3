import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

const Settings = {
  OFFERS_COUNT: 400
};

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

it(`<App/> should render an entire app`, () => {
  const tree = renderer
  .create(<App
    offersCount = {Settings.OFFERS_COUNT}
    offers = {offers}
    onLocationItemClick = {() => {}}
  />)
  .toJSON();

  expect(tree).toMatchSnapshot();
});
