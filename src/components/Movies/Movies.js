import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoviesCard from '../MoviesCard/MoviesCard';
import './Movies.css';

function Movies({
  check,
  movies,
  moviesDataTimes,
  userMovies,
  toggleMovies,
  onSearch,
  onHeader,
  stateHeader,
}) {
  const [statusCheck, setStatusCheck] = React.useState(true);
  function filterCheck() {
    setStatusCheck(!statusCheck);
  }
  useEffect(() => {
    if (!stateHeader) {
      onHeader(true);
    }
  }, [onHeader, stateHeader]);
  return (
    <React.Fragment>
      <SearchForm
        nameFrom={'movies'}
        statusCheck={statusCheck}
        onFilter={filterCheck}
        onSearch={onSearch}
        />
      {(check && statusCheck) && (<MoviesCardList
        movies={moviesDataTimes}
        component={MoviesCard}
        userMovies={userMovies}
        toggleMovies={toggleMovies}
      />)}
      {(check && !statusCheck) && (<MoviesCardList
        movies={movies}
        component={MoviesCard}
        userMovies={userMovies}
        toggleMovies={toggleMovies}
      />)}
    </React.Fragment>
  );
}

Movies.propTypes = {
  check: PropTypes.bool.isRequired,
  movies: PropTypes.array.isRequired,
  moviesDataTimes: PropTypes.array.isRequired,
  userMovies: PropTypes.array.isRequired,
  toggleMovies: PropTypes.func.isRequired,
  onHeader: PropTypes.func.isRequired,
  stateHeader: PropTypes.bool.isRequired,
  onSearch: PropTypes.func.isRequired,
};

export default Movies;
