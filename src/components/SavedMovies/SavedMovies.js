import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoviesCard from '../MoviesCard/MoviesCard';
import './SavedMovies.css';

function SavedMovies({
  check,
  onHeader,
  stateHeader,
  movies,
  moviesDataTimes,
  userMovies,
  onSearch,
  toggleMovies,
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
        nameFrom={'saved-movies'}
        onFilter={filterCheck}
        onSearch={onSearch}
        statusCheck={statusCheck}
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

SavedMovies.propTypes = {
  movies: PropTypes.array.isRequired,
  moviesDataTimes: PropTypes.array.isRequired,
  userMovies: PropTypes.array.isRequired,
  onSearch: PropTypes.func.isRequired,
  check: PropTypes.bool.isRequired,
  stateHeader: PropTypes.bool.isRequired,
  onHeader: PropTypes.func.isRequired,
  toggleMovies: PropTypes.func.isRequired,
};

export default SavedMovies;
