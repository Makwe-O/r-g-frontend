import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Text from '../../atoms/Text/Text';
import './Card3.scss';

const Card3 = ({ text, gender, birth, url }) => {
  const link = url.split('/');
  return (
    <div className="card3__container">
      <div className="card__image__container">
        <img
          className="card3__image"
          src="https://res.cloudinary.com/dnavbc7ny/image/upload/v1570656730/star%20wars/character-1.jpg"
          alt="card"
        />
      </div>
      <div className="card3__content">
        <div className="card3__content__title">
          <Text text={text} color="grey" type="text--normal" />
        </div>
        <div className="card3__content__body">
          Birth Year
          <Text text={birth} type="text--small" />
          Gender
          <Text text={gender} type="text--small" />
          <Link to={`${link[4]}/${link[5]}`}>Click</Link>
        </div>
      </div>
    </div>
  );
};

Card3.propTypes = {
  text: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  birth: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default Card3;
