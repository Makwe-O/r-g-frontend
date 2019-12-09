import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import Input from '../../atoms/Input/Input';
import {
  UPDATE_SEARCH_QUERY,
  searchResultContext
} from '../../../context/searchContext';
import './SearchBox.scss';

const SearchBox = ({ search, history }) => {
  const [inputValue, setInputValue] = useState('');

  const { searchStore, searchDispatch } = useContext(searchResultContext);
  const handleSubmit = e => {
    e.preventDefault();
    searchDispatch({ type: UPDATE_SEARCH_QUERY, payload: inputValue });

    if (!window.location.pathname.includes('search')) {
      history.push('/search');
    } else {
      return null;
    }
  };
  return (
    <span className="form__wrapper">
      <span className="form__icon">
        <i className="fas fa-search" />
      </span>
      <form onSubmit={handleSubmit}>
        <Input
          theme="input--normal"
          defaultValue={search}
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
        />
      </form>
    </span>
  );
};
SearchBox.propTypes = {
  search: PropTypes.string.isRequired,
  history: PropTypes.object.isRequired
};
export default SearchBox;
