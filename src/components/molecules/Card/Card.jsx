import React from 'react';
import Text from '../../atoms/Text/Text';
import './Card.scss';

const Card = () => {
  return (
    <div className="card__container">
      <div>
        <img
          className="card__image"
          src="https://res.cloudinary.com/store-manager/image/upload/v1571213132/barefoot-nomad/destination-image-one.svg"
          alt="card"
        />
      </div>
      <div className="card__content">
        <div className="card__content__title">
          <Text text="Ghost" color="grey" type="text--normal" />
        </div>
        <div className="card__content__body">
          <Text text="Model" type="text--small" />
          <Text text="Cargo" type="text--small" />
        </div>
      </div>
    </div>
  );
};

export default Card;
