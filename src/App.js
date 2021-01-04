import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
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
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/checkout">
          <Checkout />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/products" exact>
          <Products />
        </Route>
        <Route path="/products/:id">
          <ProductDetails />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}
