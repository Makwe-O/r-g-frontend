import React from 'react';
import PropTypes from 'prop-types';
import './input.scss';

const Input = ({ type = 'text', theme }) => {
  return <input type={type} className={theme} />;
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  theme: PropTypes.string.isRequired
};
export default Input;
