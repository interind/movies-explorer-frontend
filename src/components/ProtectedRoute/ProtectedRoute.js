import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProtectedRoute = ({ children, loggedIn }) => (
    <Route>
      {() => (loggedIn ? (
          <React.Fragment>{children}</React.Fragment>
      ) : (
          <Redirect to='/signin' />
      ))
      }
    </Route>
);

ProtectedRoute.propTypes = {
  loggedIn: PropTypes.string,
  children: PropTypes.array,
};

export default ProtectedRoute;
