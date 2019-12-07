import React from 'react';
import PropTypes from 'prop-types';
import Text from '../../atoms/Text/Text';
import './Card2.scss';

const Card2 = ({ text }) => {
  return (
    <div className="card2__container">
      <div>
        <img
          className="card2__image"
          src="https://res.cloudinary.com/dnavbc7ny/image/upload/v1570838439/star%20wars/planet-1.jpg"
          alt="card"
        />
      </div>
      <div className="card2__content">
        <div className="card2__content__title">
          <Text text={text} color="grey" type="text--normal" />
        </div>
      </div>
    </div>
  );
};

Card2.propTypes = {
  text: PropTypes.string.isRequired
};
export default Card2;
