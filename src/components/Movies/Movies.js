import React from 'react';
import PropTypes from 'prop-types';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import './Movies.css';

function Movies({ movies, openImage }) {
  return (
    <React.Fragment>
      <div>Movies</div>
      <SearchForm />
      <MoviesCardList movies={movies} openImage={openImage}/>
    </React.Fragment>
  );
}

Movies.propTypes = {
  movies: PropTypes.array.isRequired,
  openImage: PropTypes.func.isRequired,
};

export default Movies;
