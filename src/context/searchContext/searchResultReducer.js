import {
  FETCH_SEARCH_RESULT_DATA,
  UPDATE_SEARCH_QUERY
} from './searchResultTypes';

export const searchInitialState = {
  starships: [],
  planets: [],
  people: [],
  query: ''
};

export const searchResultReducer = (state, action) => {
  switch (action.type) {
    case FETCH_SEARCH_RESULT_DATA:
      return {
        ...state,
        ...action.payload
      };

    case UPDATE_SEARCH_QUERY:
      return {
        ...state,
        query: action.payload
      };

    default:
      return state;
  }
};
