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
  const notFound = <p className='MoviesCardList__not-found'>Фильмов нет</p>;
  const [count, setCount] = useState(4);
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
            type='button' title='Ещё' onChange={() => setCount(count + 4)}>
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
