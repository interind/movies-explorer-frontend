import React from 'react';
import PropTypes from 'prop-types';
import './FilterCheckbox.css';

function FilterCheckbox({
  classLabel = '',
  onInput,
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
          onInput={onInput}/>
        <span id='span' className='FilterCheckbox'/>
        <span className='FilterCheckbox-text'>{children}</span>
      </label>
    </React.Fragment>
  );
}

FilterCheckbox.propTypes = {
  value: PropTypes.any,
  onInput: PropTypes.func,
  onFilter: PropTypes.func,
  classLabel: PropTypes.string,
  classCheck: PropTypes.string,
  idSpan: PropTypes.string,
  name: PropTypes.string,
  children: PropTypes.string,

};

export default FilterCheckbox;
