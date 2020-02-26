const Currency = {
  USD: `$`,
  EUR: `€`,
};

const OfferType = {
  APARTMENT: `Apartment`,
  ROOM: `Private room`,
  HOUSE: `House`,
  HOTEL: `Hotel`,
};

export default [
  {
    image: `img/apartment-01.jpg`,
    premiality: Math.random() > 0.8,
    price: `${Currency.EUR}${Math.round(Math.random() * 100)}`,
    header: `Beautiful & luxurious apartment at great location`,
    type: OfferType[Object.keys(OfferType)[Math.floor(Math.random() * Object.keys(OfferType).length)]],
    rating: Math.round(Math.random() * (5 - 0) + 0),
    position: [52.3909553943508, 4.85309666406198],
  },
  {
    image: `img/apartment-02.jpg`,
    premiality: Math.random() > 0.8,
    price: `${Currency.EUR}${Math.round(Math.random() * 100)}`,
    header: `Nice, cozy, warm big bed apartment`,
    type: OfferType[Object.keys(OfferType)[Math.floor(Math.random() * Object.keys(OfferType).length)]],
    rating: Math.round(Math.random() * (5 - 0) + 0),
    position: [52.369553943508, 4.85309666406198],
  },
  {
    image: `img/apartment-03.jpg`,
    premiality: Math.random() > 0.8,
    price: `${Currency.EUR}${Math.round(Math.random() * 100)}`,
    header: `Canal View Prinsengracht`,
    type: OfferType[Object.keys(OfferType)[Math.floor(Math.random() * Object.keys(OfferType).length)]],
    rating: Math.round(Math.random() * (5 - 0) + 0),
    position: [52.3909553943508, 4.929309666406198],
  },
  {
    image: `img/room.jpg`,
    premiality: Math.random() > 0.8,
    price: `${Currency.EUR}${Math.round(Math.random() * 100)}`,
    header: `Wood and stone place`,
    type: OfferType[Object.keys(OfferType)[Math.floor(Math.random() * Object.keys(OfferType).length)]],
    rating: Math.round(Math.random() * (5 - 0) + 0),
    position: [52.3809553943508, 4.939309666406198],
  },
];
