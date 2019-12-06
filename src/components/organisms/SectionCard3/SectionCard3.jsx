import React from 'react';
import PropTypes from 'prop-types';
import Title from '../../molecules/Title/Title';
import Card3 from '../../molecules/Card3/Card3';
import Button from '../../atoms/Button/Button';
import './SectionCard3.scss';

const SectionCard3 = ({ title }) => {
  return (
    <div>
      <div className="section3__title">
        <Title title={title} />
      </div>
      <div className="section3__grid">
        <Card3 />
        <Card3 />
        <Card3 />
        <Card3 />
      </div>
    </div>
  );
};

SectionCard3.propTypes = {
  title: PropTypes.string.isRequired
};

export default SectionCard3;
