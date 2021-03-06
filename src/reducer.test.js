import {reducer, ActionCreator, ActionType} from "./reducer.js";


const cities = [
  {
    id: 136,
    name: `Paris`,
    position: [
      48.8566,
      2.3522
    ],
    offersCount: 100
  },
  {
    id: 24,
    name: `Cologne`,
    position: [
      50.9375,
      6.9603
    ],
    offersCount: 200
  },
  {
    id: 230,
    name: `Brussels`,
    position: [
      50.8503,
      4.3517
    ],
    offersCount: 300
  },
  {
    id: 209,
    name: `Amsterdam`,
    position: [
      52.3667,
      4.8945
    ],
    offersCount: 400
  },
  {
    id: 167,
    name: `Hamburg`,
    position: [
      53.5511,
      9.9937
    ],
    offersCount: 500
  },
  {
    id: 8,
    name: `Dusseldorf`,
    position: [
      51.2277,
      6.7735
    ],
    offersCount: 0
  }
];

const offers = {
  Paris: [
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
  ],
  Cologne: [
    {
      id: 46515446,
      image: `img/apartment-01.jpg`,
      premiality: false,
      price: `€61`,
      header: `Beautiful & luxurious apartment at great location`,
      type: `Private room`,
      rating: 3,
      position: [
        51,
        6.9803
      ]
    },
    {
      id: 60035214,
      image: `img/apartment-02.jpg`,
      premiality: true,
      price: `€82`,
      header: `Nice, cozy, warm big bed apartment`,
      type: `Private room`,
      rating: 2,
      position: [
        50.9,
        6.8803
      ]
    },
    {
      id: 27616986,
      image: `img/apartment-03.jpg`,
      premiality: false,
      price: `€29`,
      header: `Canal View Prinsengracht`,
      type: `Private room`,
      rating: 4,
      position: [
        50.97,
        6.9603
      ]
    }
  ],
  Brussels: [
    {
      id: 46454147,
      image: `img/apartment-01.jpg`,
      premiality: false,
      price: `€76`,
      header: `Beautiful & luxurious apartment at great location`,
      type: `Hotel`,
      rating: 2,
      position: [
        50.8803,
        4.3717
      ]
    },
    {
      id: 79695120,
      image: `img/apartment-02.jpg`,
      premiality: false,
      price: `€54`,
      header: `Nice, cozy, warm big bed apartment`,
      type: `Hotel`,
      rating: 3,
      position: [
        50.8,
        4.3
      ]
    },
    {
      id: 42402205,
      image: `img/apartment-03.jpg`,
      premiality: false,
      price: `€28`,
      header: `Canal View Prinsengracht`,
      type: `House`,
      rating: 1,
      position: [
        50.9,
        4.34
      ]
    },
    {
      id: 16902848,
      image: `img/room.jpg`,
      premiality: false,
      price: `€65`,
      header: `Wood and stone place`,
      type: `Apartment`,
      rating: 1,
      position: [
        49.9503,
        3.8517
      ]
    }
  ],
  Amsterdam: [
    {
      id: 56877888,
      image: `img/apartment-01.jpg`,
      premiality: false,
      price: `€47`,
      header: `Beautiful & luxurious apartment at great location`,
      type: `House`,
      rating: 1,
      position: [
        52.3909553943508,
        4.85309666406198
      ]
    },
    {
      id: 38741574,
      image: `img/apartment-02.jpg`,
      premiality: true,
      price: `€20`,
      header: `Nice, cozy, warm big bed apartment`,
      type: `House`,
      rating: 5,
      position: [
        52.369553943508,
        4.85309666406198
      ]
    },
    {
      id: 29031929,
      image: `img/apartment-03.jpg`,
      premiality: false,
      price: `€18`,
      header: `Canal View Prinsengracht`,
      type: `Private room`,
      rating: 5,
      position: [
        52.3909553943508,
        4.929309666406198
      ]
    },
    {
      id: 34410202,
      image: `img/room.jpg`,
      premiality: true,
      price: `€49`,
      header: `Wood and stone place`,
      type: `Apartment`,
      rating: 1,
      position: [
        52.3809553943508,
        4.939309666406198
      ]
    }
  ],
  Hamburg: [
    {
      id: 75107864,
      image: `img/apartment-01.jpg`,
      premiality: true,
      price: `€31`,
      header: `Beautiful & luxurious apartment at great location`,
      type: `Hotel`,
      rating: 1,
      position: [
        53.53,
        9.98
      ]
    },
    {
      id: 92345292,
      image: `img/apartment-02.jpg`,
      premiality: false,
      price: `€37`,
      header: `Nice, cozy, warm big bed apartment`,
      type: `Private room`,
      rating: 4,
      position: [
        53.61,
        9.93
      ]
    }
  ],
  Dusseldorf: []
};

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

const currentActiveCardID = 0;

describe(`Reducers work correctly`, () => {
  it(`Reducer without additional parametres should return initial state`, () => {
    expect(reducer(void 0, {})).toEqual({
      cities,
      offers,
      currentCity,
      currentActiveCardID,
    });
  });

  it(`Reducer should return a new city without offers`, () => {
    expect(reducer({
      cities,
      offers,
      currentCity,
      currentActiveCardID,
    }, {
      type: ActionType.SWAP_CITY,
      payload: `Cologne`,
    })).toEqual({
      cities,
      offers,
      currentCity: {
        id: 24,
        name: `Cologne`,
        offersCount: 200,
        position: [50.9375, 6.9603]
      },
      currentActiveCardID,
    });

    expect(reducer({
      cities,
      offers,
      currentCity,
      currentActiveCardID,
    }, {
      type: ActionType.SWAP_CITY,
      payload: `Dusseldorf`,
    })).toEqual({
      cities,
      offers,
      currentCity: {
        id: 8,
        name: `Dusseldorf`,
        offersCount: 0,
        position: [51.2277, 6.7735]
      },
      currentActiveCardID,
    });
  });

  it(`Reducer should add a new city's offers to an old city`, () => {
    expect(reducer({
      cities,
      offers,
      currentCity,
      currentActiveCardID,
    }, {
      type: ActionType.GET_OFFERS,
      payload: `Cologne`,
    })).toEqual({
      cities,
      offers,
      currentCity: {
        id: 136,
        name: `Paris`,
        position: [
          48.8566,
          2.3522
        ],
        offersCount: 100,
        offers: [
          {
            id: 46515446,
            image: `img/apartment-01.jpg`,
            premiality: false,
            price: `€61`,
            header: `Beautiful & luxurious apartment at great location`,
            type: `Private room`,
            rating: 3,
            position: [
              51,
              6.9803
            ]
          },
          {
            id: 60035214,
            image: `img/apartment-02.jpg`,
            premiality: true,
            price: `€82`,
            header: `Nice, cozy, warm big bed apartment`,
            type: `Private room`,
            rating: 2,
            position: [
              50.9,
              6.8803
            ]
          },
          {
            id: 27616986,
            image: `img/apartment-03.jpg`,
            premiality: false,
            price: `€29`,
            header: `Canal View Prinsengracht`,
            type: `Private room`,
            rating: 4,
            position: [
              50.97,
              6.9603
            ]
          }
        ]
      },
      currentActiveCardID,
    });
  });

  it(`Reducer should return a new city with offers`, () => {
    expect(reducer(reducer({
      cities,
      offers,
      currentCity,
      currentActiveCardID,
    }, {
      type: ActionType.SWAP_CITY,
      payload: `Cologne`,
    }), {
      type: ActionType.GET_OFFERS,
      payload: `Cologne`,
    })).toEqual({
      cities,
      offers,
      currentCity: {
        id: 24,
        name: `Cologne`,
        position: [50.9375, 6.9603],
        offersCount: 200,
        offers: [
          {
            id: 46515446,
            image: `img/apartment-01.jpg`,
            premiality: false,
            price: `€61`,
            header: `Beautiful & luxurious apartment at great location`,
            type: `Private room`,
            rating: 3,
            position: [
              51,
              6.9803
            ]
          },
          {
            id: 60035214,
            image: `img/apartment-02.jpg`,
            premiality: true,
            price: `€82`,
            header: `Nice, cozy, warm big bed apartment`,
            type: `Private room`,
            rating: 2,
            position: [
              50.9,
              6.8803
            ]
          },
          {
            id: 27616986,
            image: `img/apartment-03.jpg`,
            premiality: false,
            price: `€29`,
            header: `Canal View Prinsengracht`,
            type: `Private room`,
            rating: 4,
            position: [
              50.97,
              6.9603
            ]
          }
        ]
      },
      currentActiveCardID,
    });
  });

  it(`Reducer should return an active card ID`, () => {
    expect(reducer({
      cities,
      offers,
      currentCity,
      currentActiveCardID,
    }, {
      type: ActionType.SET_CURRENT_ACTIVE_CARD,
      payload: 15500216,
    })).toEqual({
      cities,
      offers,
      currentCity,
      currentActiveCardID: 15500216,
    });
  });
});

describe(`Action creators work correctly`, () => {
  it(`Action creator swapCity() returns an action according a received value`, () => {
    expect(ActionCreator.swapCity(`Cologne`)).toEqual({
      payload: `Cologne`,
      type: `SWAP_CITY`,
    });
  });

  it(`Action creator getOffers() returns an action according a received value`, () => {
    expect(ActionCreator.getOffers(`Cologne`)).toEqual({
      payload: `Cologne`,
      type: `GET_OFFERS`,
    });
  });

  it(`Action creator setCurrentActiveCardID() returns an action according a received value`, () => {
    expect(ActionCreator.setCurrentActiveCardID(15500216)).toEqual({
      payload: 15500216,
      type: `SET_CURRENT_ACTIVE_CARD`,
    });
  });
});
