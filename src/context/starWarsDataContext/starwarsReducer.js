import { FETCH_STARWARS_DATA, UPDATE_STARWARS_DATA } from './starwarsTypes';

export const initialState = {
  planets: [],
  people: [],
  starships: []
};

export const starwarsReducer = (state, action) => {
  switch (action.type) {
    case FETCH_STARWARS_DATA:
      return action.payload;

    case UPDATE_STARWARS_DATA:
      return { ...state, ...action.payload };

    default:
      return state;
  }
};
