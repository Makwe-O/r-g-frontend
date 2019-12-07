import React from 'react';
import PropTypes from 'prop-types';
import Text from '../../atoms/Text/Text';
import './Card.scss';

const Card = ({ text, model, cargo }) => {
  return (
    <div className="card__container">
      <div>
        <img
          className="card__image"
          src="https://res.cloudinary.com/dnavbc7ny/image/upload/v1571018074/star%20wars/starship-3.jpg"
          alt="card"
        />
      </div>
      <div className="card__content">
        <div className="card__content__title">
          <Text text={text} color="grey" type="text--normal" />
        </div>
        <div className="card__content__body">
          Model
          <Text text={model} type="text--small" />
          Cargo
          <Text text={cargo} type="text--small" />
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  text: PropTypes.string.isRequired,
  model: PropTypes.string.isRequired,
  cargo: PropTypes.string.isRequired
};
export default Card;
