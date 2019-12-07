import React from 'react';
import { initialState } from './starwarsReducer';

const StarwarsContext = React.createContext(initialState);

export default StarwarsContext;
