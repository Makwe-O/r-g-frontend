import React from 'react';
import PropTypes from 'prop-types';
import './Text.scss';

const Text = ({ text, type, color }) => {
  return <p className={`text ${type} ${color}`}>{text}</p>;
};

Text.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
};

export default Text;
