import React from 'react';
import PropTypes from 'prop-types';
import './HeaderBar.css';

function HeaderBar({ modifier, children }) {
  const { place } = modifier;
  return (
    <div className={`HeaderBar HeaderBar_place_${place}`}>
      <h2 className={`HeaderBar__title HeaderBar__title_place_${place}`}>
        {children}
      </h2>
    </div>
  );
}

HeaderBar.propTypes = {
  modifier: PropTypes.object.isRequired,
  children: PropTypes.string,
};

export default HeaderBar;
