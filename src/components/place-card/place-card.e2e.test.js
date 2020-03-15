import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import PlaceCard from "./place-card.jsx";

Enzyme.configure({
  adapter: new Adapter(),
});

const offer = {
  id: 0,
  image: `img/apartment-01.jpg`,
  premiality: false,
  price: `€100`,
  header: `Beautiful & luxurious apartment at great location`,
  type: `Apartment`,
};

it(`Place card should be hovered`, () => {
  const currentCardHoverHandler = jest.fn();

  const placeCard = shallow(
      <PlaceCard
        currentCardHoverHandler = {currentCardHoverHandler}
        offer = {offer}
      />
  );

  const placeCardWrapper = placeCard.find(`.place-card`);

  expect(currentCardHoverHandler).toHaveBeenCalledTimes(0);
  placeCardWrapper.simulate(`mouseOver`);
  expect(currentCardHoverHandler).toHaveBeenCalledTimes(1);
});
