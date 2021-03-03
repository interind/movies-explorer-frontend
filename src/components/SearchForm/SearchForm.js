import React from 'react';
import PropTypes from 'prop-types';
import Form from '../Form/Form';
import MarkupForForms from '../MarkupForForms/MarkupForForms';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';

function SearchForm({ onChange }) {
  return (
    <section className="SearchForm">
      <Form className='SearchForm-container' nameFrom='searchForm'>
        <MarkupForForms.Search/>
        <div className='SearchForm-Check'>
          <FilterCheckbox classLabel='SearchForm-label' onChange={onChange}>Короткометражки</FilterCheckbox>
        </div>
      </Form>
    </section>
  );
}

SearchForm.propTypes = {
  onChange: PropTypes.func,
};

export default SearchForm;
