import React from 'react';
import PropTypes from 'prop-types';
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
    </div>
  );
};

PopularSection.propTypes = {
  title: PropTypes.string.isRequired
};

export default PopularSection;
