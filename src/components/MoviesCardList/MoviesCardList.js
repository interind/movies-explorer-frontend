import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

function MoviesCardList({ movies, openImage }) {
  const [count, setCount] = React.useState(3);
  return (
    <React.Fragment>
        <div className='MoviesCardList'>
          {movies.slice(0, count).map((card) => <MoviesCard
           key={card.id} onCardClick={openImage} card={card} />)}
          <Button className='MoviesCardList__button' type='button' title='Ещё' onChange={() => setCount(count + 3)}>
            Ещё
          </Button>
        </div>
    </React.Fragment>
  );
}

MoviesCardList.propTypes = {
  movies: PropTypes.array,
  openImage: PropTypes.func,
};

export default MoviesCardList;
