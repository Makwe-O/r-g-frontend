import React from 'react';
import PropTypes from 'prop-types';
import Title from '../../molecules/Title/Title';
import Card from '../../molecules/Card/Card';

import './SectionCard1.scss';

const PopularSection = ({ title, data }) => {
  return (
    <div>
      <div className="section__title">
        <Title title={title} />
      </div>
      <div className="section__grid">
        {data.map(starship => (
          <Card
            key={starship.name}
            text={starship.name}
            model={starship.model}
            cargo={starship.cargo_capacity}
          />
        ))}
      </div>
    </div>
  );
};

PopularSection.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired
};

export default PopularSection;
