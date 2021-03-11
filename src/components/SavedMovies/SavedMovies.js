import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoviesCard from '../MoviesCard/MoviesCard';
import './SavedMovies.css';

function SavedMovies({
  onHeader,
  stateHeader,
  movies,
  userMovies,
  onSearch,
  toggleMovies,
}) {
  const [statusCheck, setStatusCheck] = React.useState(true);

  function filterCheck(evt) {
    setStatusCheck(evt.target.checked);
  }
  useEffect(() => {
    const films = JSON.stringify(movies);
    localStorage.setItem('movies-save', films);
  }, [movies]);
  useEffect(() => {
    if (!stateHeader) {
      onHeader(true);
    }
  }, [onHeader, stateHeader]);
  return (
    <React.Fragment>
      <SearchForm
        nameFrom={'saved-movies'}
        base={userMovies.length}
        onFilter={filterCheck}
        onSearch={onSearch}
        statusCheck={statusCheck}
      />
      {statusCheck && (<MoviesCardList
        movies={movies}
        component={MoviesCard}
        userMovies={userMovies}
        toggleMovies={toggleMovies}
      />)}
      {!statusCheck && (<MoviesCardList
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
  userMovies: PropTypes.array.isRequired,
  onSearch: PropTypes.func.isRequired,
  stateHeader: PropTypes.bool.isRequired,
  onHeader: PropTypes.func.isRequired,
  toggleMovies: PropTypes.func.isRequired,
};

export default SavedMovies;
