import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classes from 'classnames';
import Form from '../Form/Form';
import Button from '../Button/Button';
import MarkupForForms from '../MarkupForForms/MarkupForForms';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';

function SearchForm({
  nameFrom,
  onFilter,
  onSearch,
  statusCheck,
}) {
  const searchMessage = localStorage.getItem('search');
  const [movie, setMovie] = useState(searchMessage || '');
  const [activeButton, setActiveButton] = useState(true);
  const [validCheck, setValidCheck] = useState('');
  const classButton = classes('Button__search', { Button__search_disabled: activeButton && movie.length < 1 });
  const validText = 'Нужно ввести ключевое слово.';

  function setEditMovies(evt) {
    setMovie(evt.target.value);
    setActiveButton(!evt.target.validity.valid);
  }

  function validationCheck(evt) {
    if (!evt.target.validity.valid) {
      return setValidCheck(validText);
    }
    return setValidCheck('');
  }

  function searchMovies(evt) {
    evt.preventDefault();
    if (!movie) {
      return;
    }
    localStorage.setItem('search', movie);
    onSearch(statusCheck, nameFrom, movie);
  }

  return (
    <section className="SearchForm">
      <Form className='SearchForm-container' nameFrom={nameFrom} onSubmit={searchMovies}>
        <MarkupForForms.Search
          movie={movie}
          placeMessage={validCheck}
          setEditMovies={setEditMovies}
          validationCheck={validationCheck}
        />
        <Button className={classButton} type='submit' title='Поиск' />
        <div className='SearchForm-Check'>
          <FilterCheckbox
            classLabel='SearchForm-label'
            onFilter={onFilter}
            statusCheck={statusCheck}
          >
              Короткометражки
            </FilterCheckbox>
        </div>
      </Form>
    </section>
  );
}

SearchForm.propTypes = {
  nameFrom: PropTypes.string.isRequired,
  onFilter: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
  statusCheck: PropTypes.bool.isRequired,
};

export default SearchForm;
