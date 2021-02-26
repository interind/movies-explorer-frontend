import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoviesCard from '../MoviesCard/MoviesCard';
import './Movies.css';

function Movies({ movies, openImage, toggleMovies }) {
  const [count, setCount] = React.useState(3);
  return (
    <React.Fragment>
      <div>Movies</div>
      <SearchForm />
      <MoviesCardList>
          {movies.slice(0, count).map((card) => <MoviesCard
           key={card.id} onCardClick={openImage} card={card} toggleMovies={toggleMovies}/>)}
          <Button className='MoviesCardList__button' type='button' title='Ещё' onChange={() => setCount(count + 3)}>
            Ещё
          </Button>
      </MoviesCardList>
    </React.Fragment>
  );
}

Movies.propTypes = {
  movies: PropTypes.array.isRequired,
  openImage: PropTypes.func.isRequired,
  toggleMovies: PropTypes.func.isRequired,
};

export default Movies;
