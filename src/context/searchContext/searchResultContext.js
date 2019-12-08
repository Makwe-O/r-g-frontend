import React from 'react';
import { searchInitialState } from './searchResultReducer';

const searchResultContext = React.createContext(searchInitialState);

export default searchResultContext;
