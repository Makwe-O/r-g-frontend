import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Category from './pages/Category/Category';
import './App.scss';

function App() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route exact path="/:category" component={Category} />
    </Switch>
  );
}

export default App;
