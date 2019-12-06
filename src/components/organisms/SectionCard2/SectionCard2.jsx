import React from 'react';
import PropTypes from 'prop-types';
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
    </div>
  );
};

SectionCard2.propTypes = {
  title: PropTypes.string.isRequired
};

export default SectionCard2;
