import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function PrivateRoute(props) {

  console.log(localStorage.getItem('token'));
  return (
    localStorage.getItem('token') ? (
      <Route {...props}/> ) : (
      <Redirect to="/login"/>)
  );
}

export default PrivateRoute;
