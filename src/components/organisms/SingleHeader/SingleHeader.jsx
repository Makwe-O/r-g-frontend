import React from 'react';
import './SingleHeader.scss';

import Logo from '../../atoms/Logo/Logo';
import Text from '../../atoms/Text/Text';

const SingleHeader = () => {
  return (
    <div className="starwars">
      <div className="starwars__container">
        <div className="starwars__logo__container">
          <Logo />
        </div>
        <div className="starwars__single__title">
          <Text text="Corellian Scout" type="text--large" />
        </div>
      </div>
    </div>
  );
};

export default SingleHeader;
