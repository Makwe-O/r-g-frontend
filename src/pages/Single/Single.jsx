import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { GridLoader } from 'react-spinners';
import makeRequest from '../../utils/axiosSetup';

import Text from '../../components/atoms/Text/Text';
import SingleHeader from '../../components/organisms/SingleHeader/SingleHeader';
import Related from '../../components/organisms/Related/Related';

import { StarwarsContext } from '../../context/starWarsDataContext';

const Single = ({ match }) => {
  const { store } = useContext(StarwarsContext);

  const { category, categoryid } = match.params;
  const [starwarData, setStarwarData] = useState({});

  useEffect(async () => {
    try {
      const res = await makeRequest(`${category}/${categoryid}`);
      await setStarwarData({ ...starwarData, ...res });
    } catch (err) {
      console.log(err);
    }
  }, []);
  return (
    <>
      <SingleHeader text={starwarData.name} />
      <div className="starwars__content__container">
        <div className="starwars__content__container__text">
          {!starwarData.name ? (
            <div className="loader">
              <GridLoader size={50} color="#e3e3e3" />
            </div>
          ) : null}

          <Text text={starwarData.name} type="text--large" />
          {starwarData.MGLT ? (
            <>
              <Text text="MGLT" type="text--normal" />
              <Text text={starwarData.MGLT} />
            </>
          ) : null}
          {starwarData.cargo_capacity ? (
            <>
              <Text text="Cargo Capacity" type="text--normal" />
              <Text text={starwarData.cargo_capacity} />
            </>
          ) : null}
          {starwarData.consumables ? (
            <>
              <Text text="Consumables" type="text--normal" />
              <Text text={starwarData.consumables} />
            </>
          ) : null}
          {starwarData.cost_in_credits ? (
            <>
              <Text text="Cost In Credits" type="text--normal" />
              <Text text={starwarData.cost_in_credits} />
            </>
          ) : null}
          {starwarData.crew ? (
            <>
              <Text text="Crew" type="text--normal" />
              <Text text={starwarData.crew} />
            </>
          ) : null}
          {starwarData.hyperdrive_rating ? (
            <>
              <Text text="HyperDrive Rating" type="text--normal" />
              <Text text={starwarData.hyperdrive_rating} />
            </>
          ) : null}
          {starwarData.length ? (
            <>
              <Text text="Length" type="text--normal" />
              <Text text={starwarData.length} />
            </>
          ) : null}
          {starwarData.manufacturer ? (
            <>
              <Text text="Manufacturer" type="text--normal" />
              <Text text={starwarData.manufacturer} />
            </>
          ) : null}
          {starwarData.max_atmosphering_speed ? (
            <>
              <Text text="Max Atmosphering Feild" type="text--normal" />
              <Text text={starwarData.max_atmosphering_speed} />
            </>
          ) : null}
          {starwarData.model ? (
            <>
              <Text text="model" type="text--normal" />
              <Text text={starwarData.model} />
            </>
          ) : null}
          {starwarData.starship_class ? (
            <>
              <Text text="Starship Class" type="text--normal" />
              <Text text={starwarData.starship_class} />
            </>
          ) : null}
          {starwarData.climate ? (
            <>
              <Text text="Climate" type="text--normal" />
              <Text text={starwarData.climate} />
            </>
          ) : null}
          {starwarData.diameter ? (
            <>
              <Text text="Diameter" type="text--normal" />
              <Text text={starwarData.diameter} />
            </>
          ) : null}
          {starwarData.gravity ? (
            <>
              <Text text="Gravity" type="text--normal" />
              <Text text={starwarData.gravity} />
            </>
          ) : null}
          {starwarData.orbital_period ? (
            <>
              <Text text="Orbital Period" type="text--normal" />
              <Text text={starwarData.orbital_period} />
            </>
          ) : null}
          {starwarData.population ? (
            <>
              <Text text="Population" type="text--normal" />
              <Text text={starwarData.population} />
            </>
          ) : null}
          {starwarData.rotation_period ? (
            <>
              <Text text="Rotation Period" type="text--normal" />
              <Text text={starwarData.rotation_period} />
            </>
          ) : null}
          {starwarData.surface_water ? (
            <>
              <Text text="Surface Water" type="text--normal" />
              <Text text={starwarData.surface_water} />
            </>
          ) : null}
          {starwarData.terrain ? (
            <>
              <Text text="Terrain" type="text--normal" />
              <Text text={starwarData.terrain} />
            </>
          ) : null}
          {starwarData.birth_year ? (
            <>
              <Text text="Birth Year" type="text--normal" />
              <Text text={starwarData.birth_year} />
            </>
          ) : null}
          {starwarData.eye_color ? (
            <>
              <Text text="Eye Color" type="text--normal" />
              <Text text={starwarData.eye_color} />
            </>
          ) : null}
          {starwarData.gender ? (
            <>
              <Text text="Gender" type="text--normal" />
              <Text text={starwarData.gender} />
            </>
          ) : null}
          {starwarData.hair_color ? (
            <>
              <Text text="Hair Color" type="text--normal" />
              <Text text={starwarData.hair_color} />
            </>
          ) : null}
          {starwarData.weight ? (
            <>
              <Text text="Weight" type="text--normal" />
              <Text text={starwarData.weight} />
            </>
          ) : null}
          {starwarData.mass ? (
            <>
              <Text text="Mass" type="text--normal" />
              <Text text={starwarData.mass} />
            </>
          ) : null}
          {starwarData.skin_color ? (
            <>
              <Text text="Skin Color" type="text--normal" />
              <Text text={starwarData.skin_color} />
            </>
          ) : null}
        </div>
      </div>

      <div className="starwars__container">
        <Related text={category} data={store[`${category}`]} />
      </div>
    </>
  );
};
Single.propTypes = {
  match: PropTypes.object.isRequired
};
export default Single;
