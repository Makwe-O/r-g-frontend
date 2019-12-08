import React from 'react';
import PropTypes from 'prop-types';
import { GridLoader } from 'react-spinners';
import Title from '../../molecules/Title/Title';
import Card from '../../molecules/Card/Card';

import './SectionCard1.scss';

const PopularSection = ({ title, data }) => {
  return (
    <div>
      {data === undefined ? (
        <div className="loader">
          <GridLoader size={50} color="#e3e3e3" />
        </div>
      ) : (
        <>
          <div className="section__title">
            <Title title={title} />
          </div>
          <div className="section__grid">
            {data.map(starship => (
              <Card
                key={starship.name}
                url={starship.url}
                text={starship.name}
                model={starship.model}
                cargo={starship.cargo_capacity}
                climate={starship.climate}
                population={starship.population}
                birthYear={starship.birth_year}
                gender={starship.gender}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

PopularSection.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired
};

export default PopularSection;
