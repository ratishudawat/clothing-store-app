import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import Header from './components/header/header.component';
import ShopPage from './pages/shop/shop.compenent';

const App = () => {
  return (
    <div className='App'>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
};

export default App;
