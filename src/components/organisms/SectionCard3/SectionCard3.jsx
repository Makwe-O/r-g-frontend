import React from 'react';
import PropTypes from 'prop-types';
import Title from '../../molecules/Title/Title';
import Card3 from '../../molecules/Card3/Card3';
import './SectionCard3.scss';

const SectionCard3 = ({ title, data }) => {
  return (
    <div>
      <div className="section3__title">
        <Title title={title} />
      </div>
      <div className="section3__grid">
        {data.map(people => (
          <Card3
            key={people.name}
            url={people.url}
            text={people.name}
            birth={people.birth_year}
            gender={people.gender}
          />
        ))}
      </div>
    </div>
  );
};

SectionCard3.propTypes = {
  title: PropTypes.string.isRequired
};

export default SectionCard3;
