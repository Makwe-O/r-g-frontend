import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { GridLoader } from 'react-spinners';

import Button from '../../components/atoms/Button/Button';
import Header from '../../components/organisms/Header/Header';
import SectionCard1 from '../../components/organisms/SectionCard1/SectionCard1';
import SectionCard2 from '../../components/organisms/SectionCard2/SectionCard2';
import SectionCard3 from '../../components/organisms/SectionCard3/SectionCard3';

import { StarwarsContext } from '../../context';

const Home = () => {
  const { store } = useContext(StarwarsContext);
  return (
    <>
      <Header />
      {store.planets.results === undefined ? (
        <div className="loader">
          <GridLoader size={50} color="#e3e3e3" />
        </div>
      ) : (
        <>
          <div className="starwars__container">
            <SectionCard1
              title="Popular StarShips"
              data={store.starships.results.filter(
                (starship, index) => index < 6
              )}
            />
            <div className="section2__button">
              <Link to="/starships">
                <Button theme="button--primary">View More</Button>
              </Link>
            </div>
          </div>
          <div className="starwars__container">
            <SectionCard2
              title="Popular Planets"
              data={store.planets.results.filter(
                (starship, index) => index < 3
              )}
            />
            <div className="section2__button">
              <Link to="/planets">
                <Button theme="button--primary">View More</Button>
              </Link>
            </div>
          </div>
          <div className="starwars__container">
            <SectionCard3
              title="Popular People"
              data={store.people.results.filter((starship, index) => index < 4)}
            />
            <div className="section2__button">
              <Link to="/people">
                <Button theme="button--primary">View More</Button>
              </Link>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Home;
