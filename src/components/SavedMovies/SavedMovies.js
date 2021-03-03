import React from 'react';
import PropTypes from 'prop-types';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoviesCard from '../MoviesCard/MoviesCard';
import './SavedMovies.css';

function SavedMovies({
  movies,
  searchMovies,
  toggleMovies,
  filterTimes,
  isCheckFilter,
  isOpenCheck,
}) {
  return (
    <React.Fragment>
      <SearchForm onFilter={isCheckFilter} onSearch={searchMovies}/>
      <MoviesCardList>
          {(isOpenCheck && movies.length > 0) && (filterTimes(movies).map((card) => <MoviesCard
           key={card.id}
           card={card} movies={movies} toggleMovies={toggleMovies}/>))}
          {(!isOpenCheck && movies.length > 0) && (movies.map((card) => <MoviesCard
           key={card.id}
           card={card} movies={movies} toggleMovies={toggleMovies}/>))}
           {movies.length <= 0 && 'Фильмов ещё нет'}
      </MoviesCardList>
    </React.Fragment>
  );
}

SavedMovies.propTypes = {
  movies: PropTypes.array,
  searchMovies: PropTypes.func,
  toggleMovies: PropTypes.func.isRequired,
  filterTimes: PropTypes.func.isRequired,
  isCheckFilter: PropTypes.func.isRequired,
  isOpenCheck: PropTypes.bool.isRequired,
};

export default SavedMovies;
