import React from 'react';
import PropTypes from 'prop-types';
import classes from 'classnames';
import './HeaderBar.css';

function HeaderBar({ title, modifier }) {
  const classHeaderBar = classes('HeaderBar', modifier);
  return (
    <div className={classHeaderBar}>
      <h2 className='HeaderBar__title'>
        {title}
      </h2>
    </div>
  );
}

HeaderBar.propTypes = {
  title: PropTypes.string.isRequired,
  modifier: PropTypes.string,
};

export default HeaderBar;
