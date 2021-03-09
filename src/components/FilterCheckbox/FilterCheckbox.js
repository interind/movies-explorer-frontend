import React from 'react';
import PropTypes from 'prop-types';
import './FilterCheckbox.css';

function FilterCheckbox({
  classLabel = '',
  statusCheck,
  onFilter,
  children,
}) {
  return (
    <React.Fragment>
      <label className={classLabel}>
        <input
          className='FilterCheckbox'
          type='checkbox'
          name='checkbox'
          onChange={onFilter}
          checked={statusCheck}
        />
        <span id='span' className='FilterCheckbox'/>
        <span className='FilterCheckbox-text'>{children}</span>
      </label>
    </React.Fragment>
  );
}

FilterCheckbox.propTypes = {
  onFilter: PropTypes.func.isRequired,
  classLabel: PropTypes.string,
  statusCheck: PropTypes.bool.isRequired,
  children: PropTypes.string,

};

export default FilterCheckbox;
