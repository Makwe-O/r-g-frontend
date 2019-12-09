import React, { useContext } from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import PropTypes from 'prop-types';
import SectionCard1 from '../../components/organisms/SectionCard1/SectionCard1';
import Header from '../../components/organisms/Header/Header';

import {
  StarwarsContext,
  UPDATE_STARWARS_DATA
} from '../../context/starWarsDataContext';

const Category = ({ match, history }) => {
  const { store, dispatch } = useContext(StarwarsContext);

  const { category } = match.params;

  const handlePageClick = data => {
    let selected = data.selected;
    try {
      const res = axios
        .get(`https://swapi.co/api/${category}/?page=${selected + 1}`)
        .then(content => {
          const paginatedData = { [category]: content.data };
          dispatch({ type: UPDATE_STARWARS_DATA, payload: paginatedData });
        });
    } catch (err) {}
  };

  return (
    <>
      <Header history={history} />
      <div className="starwars__container">
        <SectionCard1
          title={`Popular ${category}`}
          data={store[category].results}
        />
        <div className="pagination__container">
          <ReactPaginate
            previousLabel="previous"
            nextLabel="next"
            pageCount={store[category].count / 10}
            onPageChange={handlePageClick}
            breakLabel="..."
            breakClassName="break-me"
            containerClassName="pagination"
            pageClassName="pageClassName"
            activeClassName="active"
            disabledClassName="disabled"
          />
        </div>
      </div>
    </>
  );
};

Category.propTypes = {
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

export default Category;
