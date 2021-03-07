import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classes from 'classnames';
import Form from '../Form/Form';
import Button from '../Button/Button';
import MarkupForForms from '../MarkupForForms/MarkupForForms';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';

function SearchForm({ onFilter, onSearch }) {
  const searchMessage = localStorage.getItem('search');
  const [movie, setMovie] = useState(searchMessage || '');
  const [activeButton, setActiveButton] = useState(true);
  const [validCheck, setValidCheck] = useState('');
  const classButton = classes('Button__search', { Button__search_disabled: activeButton && movie.length < 1 });

  function setEditMovies(evt) {
    setMovie(evt.target.value);
    setActiveButton(!evt.target.value);
  }

  function validationCheck(evt) {
    if (!evt.target.validity.valid) {
      return setValidCheck('Нужно ввести ключевое слово');
    }
    return setValidCheck('');
  }

  function searchMovies(evt) {
    evt.preventDefault();
    if (!movie) {
      return;
    }
    localStorage.setItem('search', movie);
    onSearch(evt, movie);
  }

  return (
    <section className="SearchForm">
      <Form className='SearchForm-container' nameFrom='searchForm' onSubmit={searchMovies}>
        <MarkupForForms.Search
          movie={movie}
          placeMessage={validCheck}
          setEditMovies={setEditMovies}
          validationCheck={validationCheck}
        />
        <Button className={classButton} type='submit' title='Поиск' />
        <div className='SearchForm-Check'>
          <FilterCheckbox classLabel='SearchForm-label' onFilter={onFilter}>Короткометражки</FilterCheckbox>
        </div>
      </Form>
    </section>
  );
}

SearchForm.propTypes = {
  onFilter: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
};

export default SearchForm;
