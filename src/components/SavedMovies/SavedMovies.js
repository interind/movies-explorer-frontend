import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoviesCard from '../MoviesCard/MoviesCard';
import cryptoKeys from '../../utils/crypto';
import './SavedMovies.css';

function SavedMovies({
  onHeader,
  movies,
  userMovies,
  onSearch,
  toggleMovies,
  filterTimes,
  isCheckFilter,
  isOpenCheck,
}) {
  const notFound = <p>Фильмов нет</p>;
  useEffect(() => {
    onHeader(true);
  });
  return (
    <React.Fragment>
      <SearchForm onFilter={isCheckFilter} onSearch={onSearch}/>
      <MoviesCardList>
        {(isOpenCheck && movies.length > 0) && (filterTimes(movies).length <= 0
          ? notFound : filterTimes(movies).map((card) => <MoviesCard
          key={cryptoKeys(card._id)}
          card={card} movies={userMovies} userMovies={userMovies} toggleMovies={toggleMovies}/>)) }
        {(!isOpenCheck && movies.length > 0) && (movies.map((card) => <MoviesCard
          key={cryptoKeys(card._id)}
          card={card} movies={userMovies} userMovies={userMovies} toggleMovies={toggleMovies}/>))}
          {movies.length <= 0 && notFound}
      </MoviesCardList>
    </React.Fragment>
  );
}

SavedMovies.propTypes = {
  movies: PropTypes.array.isRequired,
  userMovies: PropTypes.array.isRequired,
  onSearch: PropTypes.func,
  onHeader: PropTypes.func.isRequired,
  toggleMovies: PropTypes.func.isRequired,
  filterTimes: PropTypes.func.isRequired,
  isCheckFilter: PropTypes.func.isRequired,
  isOpenCheck: PropTypes.bool.isRequired,
};

export default SavedMovies;
