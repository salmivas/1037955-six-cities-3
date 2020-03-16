import React from "react";
import renderer from "react-test-renderer";
import Map from "./map.jsx";

const currentCity = {
  id: 136,
  name: `Paris`,
  position: [
    48.8566,
    2.3522
  ],
  offersCount: 100,
  offers: [
    {
      id: 15500216,
      image: `img/apartment-01.jpg`,
      premiality: true,
      price: `€15`,
      header: `Beautiful & luxurious apartment at great location`,
      type: `Apartment`,
      rating: 3,
      position: [
        48.8966,
        2.3522
      ]
    },
    {
      id: 17516458,
      image: `img/apartment-02.jpg`,
      premiality: true,
      price: `€74`,
      header: `Nice, cozy, warm big bed apartment`,
      type: `House`,
      rating: 1,
      position: [
        48.7566,
        2.3522
      ]
    },
    {
      id: 61539669,
      image: `img/apartment-03.jpg`,
      premiality: false,
      price: `€15`,
      header: `Canal View Prinsengracht`,
      type: `Apartment`,
      rating: 5,
      position: [
        48.8066,
        2.3022
      ]
    }
  ]
};

it(`Render Map`, () => {
  const tree = renderer
    .create(
        <Map
          currentCity = {currentCity}
          currentActiveCardID = {0}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
