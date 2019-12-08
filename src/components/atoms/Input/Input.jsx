import React from 'react';
import PropTypes from 'prop-types';
import './input.scss';

const Input = ({ type = 'text', theme, defaultValue, value, onChange }) => {
  return (
    <input
      type={type}
      className={theme}
      defaultValue={defaultValue}
      value={value}
      onChange={onChange}
    />
  );
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  theme: PropTypes.string.isRequired,
  defaultValue: PropTypes.string,
  value: PropTypes.string.isRequired
};
export default Input;
