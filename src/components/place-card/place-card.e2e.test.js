import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import PlaceCard from "./place-card.jsx";

Enzyme.configure({
  adapter: new Adapter(),
});

const offer = {
  offerImage: `img/apartment-01.jpg`,
  offerPremiality: false,
  offerPrice: `€100`,
  offerHeader: `Beautiful & luxurious apartment at great location`,
  offerType: `Apartment`,
};

it(`Place card should be hovered`, () => {
  const onHover = jest.fn();

  const placeCard = shallow(
      <PlaceCard
        onHover = {onHover}
        offer = {offer}
      />
  );

  const placeCardWrapper = placeCard.find(`.place-card`);

  expect(onHover).toHaveBeenCalledTimes(0);
  placeCardWrapper.simulate(`mouseOver`);
  expect(onHover).toHaveBeenCalledTimes(1);
});
