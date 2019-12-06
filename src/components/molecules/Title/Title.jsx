import React from 'react';
import PropTypes from 'prop-types';
import Text from '../../atoms/Text/Text';
import './Title.scss';

const Title = ({ title, color }) => {
  return (
    <div className="title__container">
      <Text text={title} type="text--large" color={color} />
      <hr className="horizontal-line" />
    </div>
  );
};

Title.propTypes = {
  title: PropTypes.string.isRequired
};

export default Title;
