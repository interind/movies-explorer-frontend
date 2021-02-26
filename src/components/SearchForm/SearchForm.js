import React from 'react';
import PropTypes from 'prop-types';
import Form from '../Form/Form';
import Input from '../Input/Input';
import Button from '../Button/Button';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';

function SearchForm({ onChange }) {
  return (
    <section className="SearchForm">
      <Form className='SearchForm-container' nameFrom='searchForm'>
        <Input className={'SearchForm-input'} name='search' type='text' placeholder='Поиск фильмов' />
        <Button className='SearchForm__button-search' type='submit' title='Поиск' />
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
