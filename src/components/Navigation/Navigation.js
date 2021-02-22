import React from 'react';
import PropTypes from 'prop-types';
import './Navigation.css';

function Navigation({ children }) {
  return (
    <nav>
     {children}
    </nav>
  );
}

Navigation.propTypes = {
  children: PropTypes.object.isRequired,
};

export default Navigation;
