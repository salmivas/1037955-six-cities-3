import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main.jsx";

Enzyme.configure({
  adapter: new Adapter(),
});

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

it(`Location link should be pressed`, () => {
  const onLocationItemLinkClick = jest.fn();

  const main = shallow(
      <Main
        offersCount = {Settings.OFFERS_COUNT}
        offers = {offers}
        onLocationItemLinkClick = {onLocationItemLinkClick}
      />
  );

  const locationsItem = main.find(`.tabs__item--active`);

  locationsItem.props().onClick();

  expect(onLocationItemLinkClick.mock.calls.length).toBe(1);
});
