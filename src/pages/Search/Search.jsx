import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { GridLoader } from 'react-spinners';

import makeRequest from '../../utils/axiosSetup';
import {
  FETCH_SEARCH_RESULT_DATA,
  searchResultContext
} from '../../context/searchContext';
import Header from '../../components/organisms/Header/Header';
import SectionCard1 from '../../components/organisms/SectionCard1/SectionCard1';

const Search = ({ history }) => {
  const [isLoading, setIsLoading] = useState(false);
  const { searchStore, searchDispatch } = useContext(searchResultContext);
  useEffect(() => {
    setIsLoading(true);

    const searchPeople = makeRequest('people', searchStore.query);
    const searchStarships = makeRequest('starships', searchStore.query);
    const searchPlanets = makeRequest('planets', searchStore.query);
    try {
      Promise.all([searchPeople, searchPlanets, searchStarships]).then(data => {
        const storeData = {
          people: data[0],
          planets: data[1],
          starships: data[2]
        };
        searchDispatch({ type: FETCH_SEARCH_RESULT_DATA, payload: storeData });
        setIsLoading(false);
      });
    } catch (err) {
      console.log(err);
    }
  }, [searchStore.query]);

  return (
    <>
      <Header history={history} />
      {isLoading ? (
        <div className="loader">
          <GridLoader size={50} color="#e3e3e3" />
        </div>
      ) : (
        <>
          <div className="starwars__container">
            <SectionCard1
              title="Search results for Starships"
              data={searchStore.starships.results}
            />
          </div>
          <div className="starwars__container">
            <SectionCard1
              title="Search results for Planets"
              data={searchStore.planets.results}
            />
          </div>
          <div className="starwars__container">
            <SectionCard1
              title="Search results for People"
              data={searchStore.people.results}
            />
          </div>
        </>
      )}
    </>
  );
};

Search.propTypes = { history: PropTypes.object.isRequired };

export default Search;
