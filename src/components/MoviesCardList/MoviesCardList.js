import React from 'react';
import PropTypes from 'prop-types';
import './MoviesCardList.css';

function MoviesCardList({ children }) {
  const notFound = <p>Фильмов нет</p>;
  return (
    <React.Fragment>
        <section className='MoviesCardList'>
         {children || notFound}
        </section>
    </React.Fragment>
  );
}

MoviesCardList.propTypes = {
  children: PropTypes.any,
};

export default MoviesCardList;
