
import React, {useState} from 'react';

import Layout from './components/Layout/Layout';
import {BrowserRouter,Switch, Route} from 'react-router-dom';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'
import CheckoutContainer from '../src/containers/Checkout/Checkout';
import Orders from '../src/containers/Orders/Order';

function App() {

  return (
    <BrowserRouter>

    <div>
      <Layout>

      <Switch>
        <Route path="/orders" component={Orders} />
      <Route  path ='/checkout' component={CheckoutContainer}/>
                <Route  path ='/' component={BurgerBuilder}/>

                </Switch>


      </Layout>
 
    </div>
 
    </BrowserRouter>
  );
}

export default App;
