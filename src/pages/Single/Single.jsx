import React from 'react';

import SingleHeader from '../../components/organisms/SingleHeader/SingleHeader';
import Related from '../../components/organisms/Related/Related';

const Single = () => {
  return (
    <>
      <SingleHeader />
      <div className="starwars__container">
        <Related />
      </div>
    </>
  );
};

export default Single;
