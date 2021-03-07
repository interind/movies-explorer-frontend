import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoviesCard from '../MoviesCard/MoviesCard';
import cryptoKeys from '../../utils/crypto';
import './SavedMovies.css';

function SavedMovies({
  onHeader,
  stateHeader,
  movies,
  userMovies,
  onSearch,
  toggleMovies,
  filterTimes,
}) {
  const [status, setStatus] = useState(true);

  function filterCheck(evt) {
    if (evt.target.checked === true) {
      setStatus(false);
    } else {
      setStatus(true);
    }
  }
  useEffect(() => {
    if (!stateHeader) {
      onHeader(true);
    }
  }, [onHeader, stateHeader]);
  return (
    <React.Fragment>
      <SearchForm
        movies={movies}
        onFilter={filterCheck}
        onSearch={onSearch}
      />
      <MoviesCardList>
        {(!status && movies.length > 0) && (filterTimes(movies).map((card) => <MoviesCard
          key={cryptoKeys(card._id)}
          card={card} movies={userMovies} userMovies={userMovies} toggleMovies={toggleMovies}/>))}
        {(status && movies.length > 0) && (movies.map((card) => <MoviesCard
          key={cryptoKeys(card._id)}
          card={card} movies={userMovies} userMovies={userMovies} toggleMovies={toggleMovies}/>))}
      </MoviesCardList>
    </React.Fragment>
  );
}

SavedMovies.propTypes = {
  movies: PropTypes.array.isRequired,
  userMovies: PropTypes.array.isRequired,
  onSearch: PropTypes.func,
  stateHeader: PropTypes.bool.isRequired,
  onHeader: PropTypes.func.isRequired,
  toggleMovies: PropTypes.func.isRequired,
  filterTimes: PropTypes.func.isRequired,
};

export default SavedMovies;
