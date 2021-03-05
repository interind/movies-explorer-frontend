import React from 'react';
import PropTypes from 'prop-types';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import CurrentUserContext from '../../context/CurrentUserContext';
import MoviesCard from '../MoviesCard/MoviesCard';
import './SavedMovies.css';

function SavedMovies({
  onSearch,
  toggleMovies,
  filterTimes,
  isCheckFilter,
  isOpenCheck,
}) {
  const notFound = <p>Фильмов нет</p>;
  const [, movies] = React.useContext(CurrentUserContext);
  return (
    <React.Fragment>
      <SearchForm onFilter={isCheckFilter} onSearch={onSearch}/>
      <MoviesCardList>
        {(isOpenCheck && movies.length > 0) && (filterTimes(movies).length <= 0
          ? notFound : filterTimes(movies).map((card) => <MoviesCard
          key={card.id}
          card={card} movies={movies} toggleMovies={toggleMovies}/>)) }
        {(!isOpenCheck && movies.length > 0) && (movies.map((card) => <MoviesCard
          key={card.id}
          card={card} movies={movies} toggleMovies={toggleMovies}/>))}
          {movies.length <= 0 && notFound}
      </MoviesCardList>
    </React.Fragment>
  );
}

SavedMovies.propTypes = {
  onSearch: PropTypes.func,
  toggleMovies: PropTypes.func.isRequired,
  filterTimes: PropTypes.func.isRequired,
  isCheckFilter: PropTypes.func.isRequired,
  isOpenCheck: PropTypes.bool.isRequired,
};

export default SavedMovies;
