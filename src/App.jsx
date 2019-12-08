import React, { useReducer, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Category from './pages/Category/Category';
import Single from './pages/Single/Single';
import Search from './pages/Search/Search';
import {
  initialState,
  starwarsReducer,
  FETCH_STARWARS_DATA,
  StarwarsContext
} from './context/starWarsDataContext';
import {
  searchInitialState,
  searchResultReducer,
  FETCH_SEARCH_RESULT_DATA,
  UPDATE_SEARCH_QUERY,
  searchResultContext
} from './context/searchContext';
import makeRequest from './utils/axiosSetup';

import './App.scss';

function App() {
  const [store, dispatch] = useReducer(starwarsReducer, initialState);
  const [searchStore, searchDispatch] = useReducer(
    searchResultReducer,
    searchInitialState
  );
  useEffect(() => {
    const fetchPeople = makeRequest('people');
    const fetchStarships = makeRequest('starships');
    const fetchPlanets = makeRequest('planets');
    try {
      const res = Promise.all([fetchPeople, fetchPlanets, fetchStarships]).then(
        data => {
          const storeData = {
            people: data[0],
            planets: data[1],
            starships: data[2]
          };

          dispatch({ type: FETCH_STARWARS_DATA, payload: storeData });
        }
      );
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <searchResultContext.Provider value={{ searchStore, searchDispatch }}>
      <StarwarsContext.Provider value={{ store, dispatch }}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/:category" component={Category} />
          <Route exact path="/:category/:categoryid" component={Single} />
        </Switch>
      </StarwarsContext.Provider>
    </searchResultContext.Provider>
  );
}

export default App;
