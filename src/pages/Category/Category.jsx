import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import SectionCard1 from '../../components/organisms/SectionCard1/SectionCard1';
import Header from '../../components/organisms/Header/Header';

import { StarwarsContext } from '../../context';

const Category = ({ match }) => {
  const { store } = useContext(StarwarsContext);

  const { category } = match.params;
  return (
    <>
      <Header />
      <div className="starwars__container">
        <SectionCard1 title={`Popular ${category}`} />
      </div>
    </>
  );
};

Category.propTypes = {
  match: PropTypes.object.isRequired
};

export default Category;
