import React from 'react';
import PropTypes from 'prop-types';
import './SingleHeader.scss';

import Logo from '../../atoms/Logo/Logo';
import Text from '../../atoms/Text/Text';

const SingleHeader = ({ text }) => {
  return (
    <div className="starwars">
      <div className="starwars__container">
        <div className="starwars__logo__container">
          <Logo />
        </div>
        <div className="starwars__single__title">
          <Text text={text} type="text--large" />
        </div>
      </div>
    </div>
  );
};

SingleHeader.propTypes = {
  text: PropTypes.string.isRequired
};
export default SingleHeader;
