import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoviesCard from '../MoviesCard/MoviesCard';
import './Movies.css';

function Movies({
  movies,
  toggleMovies,
  filterTimes,
  filterMovies,
  isCheckFilter,
  isOpenCheck,
}) {
  const [count, setCount] = React.useState(3);
  const lengthMovies = Number(movies.length);
  const [status, setStatus] = React.useState(lengthMovies);
  function countVisibleMovies() {
    const moviesCount = (num) => ((num <= movies.length) ? num : movies.length);
    const windowWidth = window.innerWidth;
    if (windowWidth >= 1280) {
      setCount(count + moviesCount(3));
      setStatus(status - moviesCount(3));
    } if ((windowWidth <= 780) && (windowWidth > 330)) {
      setCount(count + moviesCount(4));
      setStatus(status - moviesCount(4));
    } if (windowWidth <= 330) {
      setCount(count + moviesCount(5));
      setStatus(status - moviesCount(5));
    }
  }
  return (
    <React.Fragment>
      <SearchForm onChange={isCheckFilter}/>
      <MoviesCardList>
          {isOpenCheck && filterMovies(movies).slice(0, count).map((card) => <MoviesCard
           key={card.id} card={card} toggleMovies={toggleMovies}/>)}
          {!isOpenCheck && filterMovies(filterTimes(movies)).slice(0, count)
            .map((card) => <MoviesCard
           key={card.id} card={card} toggleMovies={toggleMovies}/>)}
          <Button className='Button-MoviesCardList' type='button' title='Ещё' onChange={countVisibleMovies}>
            Ещё
          </Button>
      </MoviesCardList>
    </React.Fragment>
  );
}

Movies.propTypes = {
  movies: PropTypes.array.isRequired,
  toggleMovies: PropTypes.func.isRequired,
  filterTimes: PropTypes.func.isRequired,
  filterMovies: PropTypes.func.isRequired,
  isCheckFilter: PropTypes.func.isRequired,
  isOpenCheck: PropTypes.bool.isRequired,
};

export default Movies;
