import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Form from '../Form/Form';
import MarkupForForms from '../MarkupForForms/MarkupForForms';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';

function SearchForm({ onFilter, onSearch }) {
  const [movie, setMovie] = useState('');
  const [activeButton, setActiveButton] = useState(true);

  function setEditMovies(evt) {
    setMovie(evt.target.value);
    setActiveButton(!evt.target.value);
  }

  function clearInput() {
    setMovie('');
  }

  function searchMovies(evt) {
    evt.preventDefault();
    if (!movie) {
      return;
    }
    clearInput();
    onSearch(movie);
  }
  return (
    <section className="SearchForm">
      <Form className='SearchForm-container' nameFrom='searchForm'>
        <MarkupForForms.Search
          activeButton={activeButton}
          movie={movie}
          onSearch={searchMovies}
          setEditMovies={setEditMovies}
        />
        <div className='SearchForm-Check'>
          <FilterCheckbox classLabel='SearchForm-label' onFilter={onFilter}>Короткометражки</FilterCheckbox>
        </div>
      </Form>
    </section>
  );
}

SearchForm.propTypes = {
  onFilter: PropTypes.func,
  onSearch: PropTypes.func,
};

export default SearchForm;
