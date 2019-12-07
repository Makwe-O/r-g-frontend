import React, { useReducer, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Category from './pages/Category/Category';
import Single from './pages/Single/Single';
import {
  initialState,
  starwarsReducer,
  FETCH_STARWARS_DATA,
  StarwarsContext
} from './context';
import makeRequest from './utils/axiosSetup';

import './App.scss';

function App() {
  const [store, dispatch] = useReducer(starwarsReducer, initialState);

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
    <StarwarsContext.Provider value={{ store, dispatch }}>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route exact path="/:category" component={Category} />
        <Route exact path="/:category/:categoryid" component={Single} />
      </Switch>
    </StarwarsContext.Provider>
  );
}

export default App;
