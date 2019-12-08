import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Text from '../../atoms/Text/Text';
import './Card2.scss';

const Card2 = ({ text, url = '' }) => {
  const link = url.split('/');
  return (
    <Link to={`${link[4]}/${link[5]}`}>
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
    </Link>
  );
};

Card2.propTypes = {
  text: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};
export default Card2;
