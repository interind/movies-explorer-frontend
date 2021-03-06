import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProtectedRoute = ({ component: Component, footer: Footer, ...props }) => (
    <Route>
      {() => (props.loggedIn ? <React.Fragment><Component {...props} /> {Footer && <Footer />}</React.Fragment> : <Redirect to='/signin' />)
      }
    </Route>
);

ProtectedRoute.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
  footer: PropTypes.func,
};

export default ProtectedRoute;
