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
    offerImage: `img/apartment-01.jpg`,
    offerPremiality: false,
    offerPrice: `€100`,
    offerHeader: `Beautiful & luxurious apartment at great location`,
    offerType: `Apartment`,
  },
  {
    offerImage: `img/apartment-02.jpg`,
    offerPremiality: true,
    offerPrice: `€200`,
    offerHeader: `Beautiful & luxurious apartment at great location`,
    offerType: `House`,
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
