import React from 'react';
import Title from '../../molecules/Title/Title';
import Card2 from '../../molecules/Card2/Card2';
import Button from '../../atoms/Button/Button';
import './SectionCard2.scss';

const SectionCard2 = ({ title }) => {
  return (
    <div>
      <div className="section2__title">
        <Title title={title} />
      </div>
      <div className="section2__grid">
        <Card2 />
        <Card2 />
        <Card2 />
      </div>
      <div className="section2__button">
        <Button theme="button--primary">View More</Button>
      </div>
    </div>
  );
};

export default SectionCard2;
