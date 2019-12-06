import React from 'react';
import Title from '../../molecules/Title/Title';
import Card from '../../molecules/Card/Card';
import Button from '../../atoms/Button/Button';
import './SectionCard1.scss';

const PopularSection = ({ title }) => {
  return (
    <div>
      <div className="section__title">
        <Title title={title} />
      </div>
      <div className="section__grid">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div className="section__button">
        <Button theme="button--primary">View More</Button>
      </div>
    </div>
  );
};

export default PopularSection;
