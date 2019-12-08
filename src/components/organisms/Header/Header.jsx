import React, { useContext } from 'react';
import Logo from '../../atoms/Logo/Logo';
import Text from '../../atoms/Text/Text';
import SearchBox from '../../molecules/SearchBox/SearchBox';

import './Header.scss';

import { searchResultContext } from '../../../context/searchContext';

const Header = ({ history }) => {
  const { searchStore } = useContext(searchResultContext);

  return (
    <div className="starwars">
      <div className="starwars__container">
        <div className="starwars__logo__container">
          <Logo />
        </div>
        <div className="starwars__header">
          <div className="starwars__header__intro">
            <Logo />
            <span className="starwars__header__text">
              <Text text="Directory" color="white" type="text--large" />
            </span>
          </div>
          <Text
            text="Find your favorite Characters, Films, Species, StarShip and Planets"
            color="white"
            type="text--medium"
          />
          <div className="starwars__form">
            <SearchBox search={searchStore.query} history={history} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
