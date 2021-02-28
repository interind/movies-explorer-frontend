import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoviesCard from '../MoviesCard/MoviesCard';
import './Movies.css';

function Movies({
  movies,
  tooglePlace,
  toggleMovies,
  filterTimes,
  isCheckFilter,
  isOpenCheck,
}) {
  const [count, setCount] = React.useState(3);
  React.useEffect(() => {
    const place = { left: 'movies', right: 'avatar' };
    tooglePlace(place);
  }, [tooglePlace]);
  return (
    <React.Fragment>
      <SearchForm onChange={isCheckFilter}/>
      <MoviesCardList>
          {isOpenCheck && movies.slice(0, count).map((card) => <MoviesCard
           key={card.id} card={card} toggleMovies={toggleMovies}/>)}
          {!isOpenCheck && filterTimes(movies).slice(0, count).map((card) => <MoviesCard
           key={card.id} card={card} toggleMovies={toggleMovies}/>)}
          <Button className='Button-MoviesCardList' type='button' title='Ещё' onChange={() => setCount(count + 3)}>
            Ещё
          </Button>
      </MoviesCardList>
    </React.Fragment>
  );
}

Movies.propTypes = {
  movies: PropTypes.array.isRequired,
  toggleMovies: PropTypes.func.isRequired,
  tooglePlace: PropTypes.func.isRequired,
  filterTimes: PropTypes.func.isRequired,
  isCheckFilter: PropTypes.func.isRequired,
  isOpenCheck: PropTypes.bool.isRequired,
};

export default Movies;
