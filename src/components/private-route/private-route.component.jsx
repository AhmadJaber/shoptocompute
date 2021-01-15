import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { UserContext } from '../../context/user';
import { LOGIN } from '../../constants/routes';

export default function PrivateRoute({ children, ...restProps }) {
  const { user } = useContext(UserContext);

  return (
    <Route
      {...restProps}
      render={() => (user.token ? children : <Redirect to={LOGIN} />)}
    />
  );
}
