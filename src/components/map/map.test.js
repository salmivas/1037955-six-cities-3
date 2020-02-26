import React from "react";
import renderer from "react-test-renderer";
import Map from "./map.jsx";

const positions = [
  {
    position: [52.3909553943508, 4.85309666406198]
  },
  {
    position: [52.369553943508, 4.85309666406198]
  },
  {
    position: [52.3909553943508, 4.929309666406198]
  },
  {
    position: [52.3809553943508, 4.939309666406198]
  }
];

const points = positions.map((it) => it.position);


it(`Render Map`, () => {
  const tree = renderer
    .create(
        <Map points = {points}/>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
