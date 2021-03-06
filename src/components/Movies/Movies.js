import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
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
}) {
  const [count, setCount] = useState(3);
  const [status, setStatus] = useState(true);
  function countVisibleMovies() {
    const windowWidth = window.innerWidth;
    if (windowWidth > 780) {
      setCount(count + 3);
    } if ((windowWidth <= 780) && (windowWidth > 330)) {
      setCount(count + 2);
    } if (windowWidth <= 330) {
      setCount(count + 2);
    }
  }
  function filterCheck(evt) {
    if (evt.target.checked === true) {
      setStatus(false);
    } else {
      setStatus(true);
    }
  }
  useEffect(() => {
    onHeader(true);
  });
  return (
    <React.Fragment>
      <SearchForm
        movies={movies}
        onFilter={filterCheck}
        onSearch={onSearch}
        />
      {(check && status) && (<MoviesCardList>
          {moviesDataTimes.slice(0, count).map((card) => <MoviesCard
           key={card.id} card={card} movies={movies} userMovies={userMovies}
            toggleMovies={toggleMovies}/>)}
          {(moviesDataTimes.length > 0) && (moviesDataTimes.length > count) && (<Button className='Button-MoviesCardList'
            type='button' title='Ещё' onChange={() => countVisibleMovies()}>
            Ещё
          </Button>)}
      </MoviesCardList>)}
      {(check && !status) && (<MoviesCardList>
           {movies.slice(0, count).map((card) => <MoviesCard
           key={card.id} card={card} movies={movies} userMovies={userMovies}
            toggleMovies={toggleMovies}/>)}
            {(movies.length > 0) && (movies.length > count) && (<Button className='Button-MoviesCardList'
            type='button' title='Ещё' onChange={() => countVisibleMovies()}>
            Ещё
          </Button>)}
        </MoviesCardList>)}

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
  onSearch: PropTypes.func,
};

export default Movies;
