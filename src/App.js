
import React, {useState} from 'react';

import Layout from './components/Layout/Layout';
import {BrowserRouter,Switch, Route} from 'react-router-dom';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'
import CheckoutContainer from '../src/containers/Checkout/Checkout';

function App() {

  return (
    <BrowserRouter>

    <div>
      <Layout>

      <Switch>
                <Route exact path ='/' component={BurgerBuilder}/>
              <Route exact path ='/checkout' component={CheckoutContainer}/>
                </Switch>


      </Layout>
 
    </div>
 
    </BrowserRouter>
  );
}

export default App;
