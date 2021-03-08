import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoviesCard from '../MoviesCard/MoviesCard';
import './Movies.css';

function Movies({
  movies,
  userMovies,
  toggleMovies,
  onSearch,
  onHeader,
  stateHeader,
}) {
  const [statusCheck, setStatusCheck] = React.useState(true);
  function filterCheck(evt) {
    setStatusCheck(evt.target.checked);
  }
  useEffect(() => {
    if (!stateHeader) {
      onHeader(true);
    }
  }, [onHeader, stateHeader]);
  useEffect(() => {
    if (movies.length > 0) {
      const films = JSON.stringify(movies);
      localStorage.setItem('movies', films);
    }
  }, [movies]);
  return (
    <React.Fragment>
      <SearchForm
        nameFrom={'movies'}
        statusCheck={statusCheck}
        onFilter={filterCheck}
        onSearch={onSearch}
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

Movies.propTypes = {
  movies: PropTypes.array.isRequired,
  userMovies: PropTypes.array.isRequired,
  toggleMovies: PropTypes.func.isRequired,
  onHeader: PropTypes.func.isRequired,
  stateHeader: PropTypes.bool.isRequired,
  onSearch: PropTypes.func.isRequired,
};

export default Movies;
