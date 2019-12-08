import { FETCH_STARWARS_DATA } from './starwarsTypes';

export const initialState = {
  planets: [],
  people: [],
  starships: []
};

export const starwarsReducer = (state, action) => {
  switch (action.type) {
    case FETCH_STARWARS_DATA:
      return action.payload;

    default:
      return state;
  }
};
