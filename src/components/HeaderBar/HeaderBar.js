import React from 'react';
import PropTypes from 'prop-types';
import './HeaderBar.css';

function HeaderBar({ modifier }) {
  const { place, title } = modifier;
  return (
    <div className={`HeaderBar HeaderBar_place_${place}`}>
      <h2 className={`HeaderBar__title HeaderBar__title_place_${place}`}>
        {title}
      </h2>
    </div>
  );
}

HeaderBar.propTypes = {
  modifier: PropTypes.object.isRequired,
};

export default HeaderBar;
