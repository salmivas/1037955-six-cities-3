import React from "react";
import renderer from "react-test-renderer";
import {Locations} from "./locations.jsx";

const cities = [
  {
    id: 136,
    name: `Paris`,
    position: [48.8566, 2.3522],
    offersCount: 100,
  },
  {
    id: 24,
    name: `Cologne`,
    position: [50.9375, 6.9603],
    offersCount: 200,
  },
  {
    id: 230,
    name: `Brussels`,
    position: [50.8503, 4.3517],
    offersCount: 300,
  },
  {
    id: 209,
    name: `Amsterdam`,
    position: [52.3667, 4.8945],
    offersCount: 400,
  },
  {
    id: 167,
    name: `Hamburg`,
    position: [53.5511, 9.9937],
    offersCount: 500,
  },
  {
    id: 8,
    name: `Dusseldorf`,
    position: [51.2277, 6.7735],
    offersCount: 0,
  }
];

const currentCity = {
  name: `Paris`,
};

it(`<Locations/> should render cities' names`, () => {
  const tree = renderer.create(
      <Locations
        onLocationItemLinkClick = {() => {}}
        currentCity = {currentCity}
        cities = {cities}
      />)
      .toJSON();

  expect(tree).toMatchSnapshot();
});
