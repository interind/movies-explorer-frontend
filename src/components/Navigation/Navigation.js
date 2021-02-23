import React from 'react';
import PropTypes from 'prop-types';
import './Navigation.css';

function Navigation({ place, children }) {
  return (
    <nav className={`Navigation Navigation_place_${place}`}>
     {children}
    </nav>
  );
}

Navigation.propTypes = {
  place: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
};

export default Navigation;
