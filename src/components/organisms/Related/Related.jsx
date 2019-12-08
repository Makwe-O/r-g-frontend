import React from 'react';
import PropTypes from 'prop-types';
import { GridLoader } from 'react-spinners';
import Text from '../../atoms/Text/Text';
import Card from '../../molecules/Card/Card';
import './Related.scss';

const Related = ({ text, data }) => {
  return (
    <>
      <div className="related__title">
        <Text text={`Recently Viewed ${text}`} type="text--large" />
      </div>
      <div className="related__grid__container">
        {data.results === undefined ? (
          <div className="loader">
            <GridLoader size={50} color="#e3e3e3" />
          </div>
        ) : (
          <div className="related__grid">
            {data.results
              .filter((starship, index) => index < 3)
              .map(starship => (
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
        )}
      </div>
    </>
  );
};

Related.propTypes = {
  text: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired
};
export default Related;
