import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Text from '../../atoms/Text/Text';

import './Card.scss';

const Card = ({
  text,
  model,
  cargo,
  climate,
  population,
  birthYear,
  gender,
  url = ''
}) => {
  const link = url.split('/');

  return (
    <div className="card__container">
      <div>
        <img
          className="card__image"
          src="https://res.cloudinary.com/dnavbc7ny/image/upload/v1571018074/star%20wars/starship-3.jpg"
          alt="card"
        />
      </div>
      <div className="card__content">
        <div className="card__content__title">
          <Text text={text} color="grey" type="text--normal" />
        </div>
        <div className="card__content__body">
          <>
            {model ? (
              <>
                Model
                <Text text={model} type="text--small" />
              </>
            ) : null}
            {cargo ? (
              <>
                Cargo
                <Text text={cargo} type="text--small" />
              </>
            ) : null}
            {climate ? (
              <>
                Climate
                <Text text={climate} type="text--small" />
              </>
            ) : null}
            {population ? (
              <>
                Population
                <Text text={population} type="text--small" />
              </>
            ) : null}
            {birthYear ? (
              <>
                Birth Year
                <Text text={birthYear} type="text--small" />
              </>
            ) : null}
            {gender ? (
              <>
                Gender
                <Text text={gender} type="text--small" />
              </>
            ) : null}
            <Link to={`${link[4]}/${link[5]}`}>Click</Link>
          </>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  text: PropTypes.string.isRequired,
  model: PropTypes.string,
  cargo: PropTypes.string,
  population: PropTypes.string,
  climate: PropTypes.string,
  birthYear: PropTypes.string,
  gender: PropTypes.string,
  url: PropTypes.string.isRequired
};
Card.defaultProps = {
  model: null,
  cargo: null,
  population: null,
  climate: null,
  birthYear: null,
  gender: null
};
export default Card;
