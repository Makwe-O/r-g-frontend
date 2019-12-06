import React from 'react';
import Text from '../../atoms/Text/Text';
import Card from '../../molecules/Card/Card';
import './Related.scss';

const Related = () => {
  return (
    <>
      <div className="related__title">
        <Text text="Recently Viewed" type="text--large" />
      </div>
      <div className="related__grid__container">
        <div className="related__grid">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </>
  );
};

export default Related;
