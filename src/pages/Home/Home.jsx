import React from 'react';
import Header from '../../components/organisms/Header/Header';
import SectionCard1 from '../../components/organisms/SectionCard1/SectionCard1';
import SectionCard2 from '../../components/organisms/SectionCard2/SectionCard2';
import SectionCard3 from '../../components/organisms/SectionCard3/SectionCard3';

const Home = () => {
  return (
    <>
      <Header />
      <div className="starwars__container">
        <SectionCard1 title="Popular StarShips" />
      </div>
      <div className="starwars__container">
        <SectionCard2 title="Popular Planets" />
      </div>
      <div className="starwars__container">
        <SectionCard3 title="Popular People" />
      </div>
    </>
  );
};

export default Home;
