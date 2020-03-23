import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import OffersList from "./offers-list.jsx";

const mockStore = configureStore([]);

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

it(`<OffersList/> should render list of offers`, () => {
  const store = mockStore({currentCity});
  const tree = renderer.create(
      <Provider store = {store}>
        <OffersList/>
      </Provider>
  )
  .toJSON();

  expect(tree).toMatchSnapshot();
});
