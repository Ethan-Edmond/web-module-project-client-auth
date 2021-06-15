import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function PrivateRoute(props) {
  return (
    localStorage.getItem('token') ? (
      <Route {...props}/> ) : (
      <Redirect to="/login"/>)
  );
}

export default PrivateRoute;
