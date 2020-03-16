import React from "react";
import renderer from "react-test-renderer";
import MainEmpty from "./main-empty.jsx";

const cityName = `Dusseldorf`;

it(`<MainEmpty/> should render empty screen`, () => {
  const tree = renderer
  .create(<MainEmpty
    cityName = {cityName}
  />)
  .toJSON();

  expect(tree).toMatchSnapshot();
});
