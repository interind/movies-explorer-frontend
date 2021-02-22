import React from 'react';
import PropTypes from 'prop-types';
import './Navigation.css';

function Navigation({ children }) {
  return (
    <nav className='Navigation-links'>
     {children}
    </nav>
  );
}

Navigation.propTypes = {
  children: PropTypes.any.isRequired,
};

export default Navigation;
