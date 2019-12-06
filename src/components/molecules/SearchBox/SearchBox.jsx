import React from 'react';
import PropTypes from 'prop-types';
import Input from '../../atoms/Input/Input';
import './SearchBox.scss';

const SearchBox = () => {
  return (
    <span className="form__wrapper">
      <span className="form__icon">
        <i className="fas fa-search" />
      </span>
      <Input theme="input--normal" />
    </span>
  );
};

export default SearchBox;
