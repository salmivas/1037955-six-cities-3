import React from "react";
import renderer from "react-test-renderer";
import Location from "./location.jsx";

const city = {
  id: 136,
  name: `Paris`,
  position: [48.8566, 2.3522],
  offersCount: 100,
};

const currentCity = {
  name: `Paris`,
};

const newCity = {
  name: `Cologne`,
};

describe(`Location should be rendered correctly`, () => {
  it(`<Location/> should render an active city name `, () => {
    const tree = renderer.create(
        <Location
          onLocationItemLinkClick = {() => {}}
          currentCity = {currentCity}
          city = {city}
        />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`<Location/> should render a city name`, () => {
    const tree = renderer.create(
        <Location
          onLocationItemLinkClick = {() => {}}
          currentCity = {newCity}
          city = {city}
        />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
