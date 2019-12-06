import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

const Button = props => {
  const { children, theme } = props;
  return <button className={theme}>{children}</button>;
};

Button.propTypes = {
  theme: PropTypes.string.isRequired
};
export default Button;
