import React from 'react';
import './Button.scss';

const Button = props => {
  console.log(props, 'hi');
  const { children, theme } = props;
  return <button className={theme}>{children}</button>;
};

export default Button;
