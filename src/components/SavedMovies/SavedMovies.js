import React from 'react';
import PropTypes from 'prop-types';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoviesCard from '../MoviesCard/MoviesCard';
import './SavedMovies.css';

function SavedMovies({ movies, openImage, toggleMovies }) {
  return (
    <React.Fragment>
    <div>SavedMovies</div>
      <SearchForm />
      <MoviesCardList>
          {(movies.length > 0) ? (movies.map((card) => <MoviesCard
           key={card.id} onCardClick={openImage} card={card} toggleMovies={toggleMovies}/>)) : 'Фильмов нет'}
      </MoviesCardList>
    </React.Fragment>
  );
}

SavedMovies.propTypes = {
  movies: PropTypes.array,
  openImage: PropTypes.func.isRequired,
  toggleMovies: PropTypes.func.isRequired,
};

export default SavedMovies;
