import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import SectionCard1 from '../../components/organisms/SectionCard1/SectionCard1';
import Header from '../../components/organisms/Header/Header';

import { StarwarsContext } from '../../context/starWarsDataContext';

const Category = ({ match }) => {
  const { store } = useContext(StarwarsContext);

  const { category } = match.params;

  switch (category) {
    case 'starships':
      return (
        <>
          <Header />
          <div className="starwars__container">
            <SectionCard1
              title={`Popular ${category}`}
              data={store.starships.results}
            />
          </div>
        </>
      );
    case 'planets':
      return (
        <>
          <Header />
          <div className="starwars__container">
            <SectionCard1
              title={`Popular ${category}`}
              data={store.planets.results}
            />
          </div>
        </>
      );
    case 'people':
      return (
        <>
          <Header />
          <div className="starwars__container">
            <SectionCard1
              title={`Popular ${category}`}
              data={store.people.results}
            />
          </div>
        </>
      );
    default:
      return <div>Hi</div>;
  }
};

Category.propTypes = {
  match: PropTypes.object.isRequired
};

export default Category;
