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
  {offerName: `OfferName01`, offerImage: `img/offer-image-01.jpg`},
  {offerName: `OfferName02`, offerImage: `img/offer-image-02.jpg`},
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
