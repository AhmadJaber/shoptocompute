import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Layout, Alert, ScrollButton, PrivateRoute } from './components';
import * as ROUTES from './constants/routes';
import {
  About,
  Cart,
  Checkout,
  Error,
  Home,
  LoginLogout,
  ProductDetails,
  Products,
} from './pages';

export default function App() {
  return (
    <Router>
      <Layout />
      <Alert />
      <ScrollButton />

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
        <PrivateRoute path={ROUTES.CHECKOUT}>
          <Checkout />
        </PrivateRoute>
        <Route path={ROUTES.LOGIN}>
          <LoginLogout />
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
