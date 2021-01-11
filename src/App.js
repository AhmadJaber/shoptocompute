import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Layout } from './components';
import * as ROUTES from './constants/routes';
import {
  About,
  Cart,
  Checkout,
  Error,
  Home,
  Login,
  ProductDetails,
  Products,
} from './pages';

export default function App() {
  return (
    <Router>
      <Layout />
      <Switch>
        <Route exact path={ROUTES.HOME}>
          <Home />
        </Route>
        <Route path={ROUTES.ABOUT}>
          <About />
        </Route>
        <Route path={ROUTES.CART}>
          <Cart />
        </Route>
        <Route path={ROUTES.CHECKOUT}>
          <Checkout />
        </Route>
        <Route path={ROUTES.LOGIN}>
          <Login />
        </Route>
        <Route path={ROUTES.PRODUCTS} exact>
          <Products />
        </Route>
        <Route path={ROUTES.PRODUCTDETAILS}>
          <ProductDetails />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}
