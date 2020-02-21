const CURRENCY = {
  USD: `$`,
  EUR: `€`,
};

const OfferType = {
  apartment: `Apartment`,
  room: `Private room`,
  house: `House`,
  hotel: `Hotel`,
};

export default [
  {
    offerImage: `img/apartment-01.jpg`,
    offerPremiality: Math.random() > 0.8,
    offerPrice: `${CURRENCY.EUR}${Math.round(Math.random() * 100)}`,
    offerHeader: `Beautiful & luxurious apartment at great location`,
    offerType: OfferType[Object.keys(OfferType)[Math.floor(Math.random() * Object.keys(OfferType).length)]],
    offerRating: Math.round(Math.random() * (5 - 0) + 0),
  },
  {
    offerImage: `img/apartment-02.jpg`,
    offerPremiality: Math.random() > 0.8,
    offerPrice: `${CURRENCY.EUR}${Math.round(Math.random() * 100)}`,
    offerHeader: `Nice, cozy, warm big bed apartment`,
    offerType: OfferType[Object.keys(OfferType)[Math.floor(Math.random() * Object.keys(OfferType).length)]],
    offerRating: Math.round(Math.random() * (5 - 0) + 0),
  },
  {
    offerImage: `img/apartment-03.jpg`,
    offerPremiality: Math.random() > 0.8,
    offerPrice: `${CURRENCY.EUR}${Math.round(Math.random() * 100)}`,
    offerHeader: `Canal View Prinsengracht`,
    offerType: OfferType[Object.keys(OfferType)[Math.floor(Math.random() * Object.keys(OfferType).length)]],
    offerRating: Math.round(Math.random() * (5 - 0) + 0),
  },
  {
    offerImage: `img/room.jpg`,
    offerPremiality: Math.random() > 0.8,
    offerPrice: `${CURRENCY.EUR}${Math.round(Math.random() * 100)}`,
    offerHeader: `Wood and stone place`,
    offerType: OfferType[Object.keys(OfferType)[Math.floor(Math.random() * Object.keys(OfferType).length)]],
    offerRating: Math.round(Math.random() * (5 - 0) + 0),
  },
];
