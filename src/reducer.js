import {cities, offers} from "./mocks/offers.js";

const initialState = {
  cities,
  offers,
  currentCity: {
    id: cities[0].id,
    name: cities[0].name,
    position: cities[0].position,
    offersCount: cities[0].offersCount,
    offers: offers[cities[0].name],
  },
  currentActiveCardID: 0,
};

const ActionType = {
  SWAP_CITY: `SWAP_CITY`,
  GET_OFFERS: `GET_OFFERS`,
  SET_CURRENT_ACTIVE_CARD: `SET_CURRENT_ACTIVE_CARD`,
};

const ActionCreator = {
  swapCity: (cityName) => ({
    type: ActionType.SWAP_CITY,
    payload: cityName,
  }),

  getOffers: (cityName) => ({
    type: ActionType.GET_OFFERS,
    payload: cityName,
  }),

  setCurrentActiveCardID: (cityID) => ({
    type: ActionType.SET_CURRENT_ACTIVE_CARD,
    payload: cityID,
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SWAP_CITY:
      const currentCity = cities.find((city) => city.name === action.payload);
      return Object.assign({}, state, {currentCity}, {currentActiveCardID: 0});

    case ActionType.GET_OFFERS:
      const currentOffers = offers[action.payload];
      state.currentCity.offers = currentOffers;
      return Object.assign({}, state);

    case ActionType.SET_CURRENT_ACTIVE_CARD:
      const currentActiveCardID = action.payload;
      return Object.assign({}, state, {currentActiveCardID});
  }

  return state;
};

export {reducer, ActionType, ActionCreator};
