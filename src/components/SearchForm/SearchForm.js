import React from 'react';
import Form from '../Form/Form';
import Input from '../Input/Input';
import Button from '../Button/Button';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';

function SearchForm() {
  return (
    <section className="SearchForm">
      <Form className='SearchForm-container' nameFrom='searchForm'>
        <Input className={'SearchForm-input'} name='search' type='text' placeholder='Поиск фильмов' />
        <Button className='SearchForm__button-search' type='submit' title='Поиск' />
        <div className='SearchForm-Check'>
          <FilterCheckbox classLabel='SearchForm-label'>Короткометражки</FilterCheckbox>
        </div>
      </Form>
    </section>
  );
}

export default SearchForm;
