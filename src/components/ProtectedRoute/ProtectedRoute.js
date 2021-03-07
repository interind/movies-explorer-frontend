import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProtectedRoute = ({ footer: Footer, children, ...props }) => (
    <Route>
      {() => (props.loggedIn ? <React.Fragment>
        {children}
        {Footer && <Footer />}
        </React.Fragment> : <Redirect to='/signin' />)
      }
    </Route>
);

ProtectedRoute.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  children: PropTypes.any,
  footer: PropTypes.func,
};

export default ProtectedRoute;
