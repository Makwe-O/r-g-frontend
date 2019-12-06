import React from 'react';
import Text from '../../atoms/Text/Text';
import './Card2.scss';

const Card2 = () => {
  return (
    <div className="card2__container">
      <div>
        <img
          className="card2__image"
          src="https://res.cloudinary.com/store-manager/image/upload/v1571213132/barefoot-nomad/destination-image-one.svg"
          alt="card"
        />
      </div>
      <div className="card2__content">
        <div className="card2__content__title">
          <Text text="Ghost" color="grey" type="text--normal" />
        </div>
      </div>
    </div>
  );
};

export default Card2;
