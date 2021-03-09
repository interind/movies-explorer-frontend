import React from 'react';
import PropTypes from 'prop-types';
import './HeaderBar.css';

function HeaderBar({
  component: Component,
  place,
  children,
}) {
  return (
    <div className={`HeaderBar HeaderBar_place_${place}`}>
      {Component && <Component />}
      <h2 className={`HeaderBar__title HeaderBar__title_place_${place}`}>
        {children}
      </h2>
    </div>
  );
}

HeaderBar.propTypes = {
  place: PropTypes.string.isRequired,
  component: PropTypes.func,
  children: PropTypes.any,
};

export default HeaderBar;
