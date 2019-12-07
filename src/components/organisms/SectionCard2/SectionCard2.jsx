import React from 'react';
import PropTypes from 'prop-types';
import Title from '../../molecules/Title/Title';
import Card2 from '../../molecules/Card2/Card2';

import './SectionCard2.scss';

const SectionCard2 = ({ title, data }) => {
  return (
    <div>
      <div className="section2__title">
        <Title title={title} />
      </div>
      <div className="section2__grid">
        {data.map(planet => (
          <Card2 text={planet.name} key={planet.name} />
        ))}
      </div>
    </div>
  );
};

SectionCard2.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired
};

export default SectionCard2;
