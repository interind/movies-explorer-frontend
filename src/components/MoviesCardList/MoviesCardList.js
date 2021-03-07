import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import './MoviesCardList.css';

function MoviesCardList({
  component: Component,
  movies,
  userMovies,
  toggleMovies,
}) {
  const notFound = <p>Фильмов нет</p>;
  const [count, setCount] = useState(3);
  function countVisibleMovies() {
    const windowWidth = window.innerWidth;
    if (windowWidth > 780) {
      setCount(count + 12);
    } if ((windowWidth <= 780) && (windowWidth > 330)) {
      setCount(count + 8);
    } if (windowWidth <= 330) {
      setCount(count + 5);
    }
  }
  return (
    <React.Fragment>
        <section className='MoviesCardList'>
          {movies.length > 0 && movies.slice(0, count).map((mov) => <Component
            key={mov._id ? mov._id : mov.id}
            card={mov}
            userMovies={userMovies}
            toggleMovies={toggleMovies}
          />)}
          {movies.length <= 0 && notFound}
         {(movies.length > 0) && (movies.length > count) && (<Button className='Button-MoviesCardList'
            type='button' title='Ещё' onChange={() => countVisibleMovies()}>
            Ещё
          </Button>)}
        </section>
    </React.Fragment>
  );
}

MoviesCardList.propTypes = {
  component: PropTypes.func.isRequired,
  movies: PropTypes.array.isRequired,
  userMovies: PropTypes.array.isRequired,
  toggleMovies: PropTypes.func.isRequired,
};

export default MoviesCardList;
