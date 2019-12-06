import React from 'react';
import Text from '../../atoms/Text/Text';
import './Card3.scss';

const Card3 = () => {
  return (
    <div className="card3__container">
      <div className="card__image__container">
        <img
          className="card3__image"
          src="https://res.cloudinary.com/store-manager/image/upload/v1571213132/barefoot-nomad/destination-image-one.svg"
          alt="card"
        />
      </div>
      <div className="card3__content">
        <div className="card3__content__title">
          <Text text="Ghost" color="grey" type="text--normal" />
        </div>
        <div className="card3__content__body">
          <Text text="Model" type="text--small" />
          <Text text="Cargo" type="text--small" />
        </div>
      </div>
    </div>
  );
};

export default Card3;
