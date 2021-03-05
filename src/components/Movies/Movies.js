import React, { useState, useEffect } from 'react';
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
  onSearch,
  onHeader,
}) {
  const [count, setCount] = useState(3);
  const [fillMovies, setFillMovies] = useState([]);
  function countVisibleMovies() {
    const moviesCount = (num) => ((num <= fillMovies.length) ? num : fillMovies.length);
    const windowWidth = window.innerWidth;
    if (windowWidth > 780) {
      setCount(count + moviesCount(3));
    } if ((windowWidth <= 780) && (windowWidth > 330)) {
      setCount(count + moviesCount(4));
    } if (windowWidth <= 330) {
      setCount(count + moviesCount(5));
    }
  }
  function filterCheck(evt) {
    if (evt.target.checked) {
      return setFillMovies(movies.slice(0, count));
    }
    return setFillMovies(filterTimes(movies).slice(0, count));
  }
  useEffect(() => {
    onHeader(true);
  });
  return (
    <React.Fragment>
      <SearchForm onFilter={filterCheck} onSearch={onSearch}/>
      <MoviesCardList>
          {fillMovies.length > 0 && (fillMovies.map((card) => <MoviesCard
           key={card.id} card={card} toggleMovies={toggleMovies}/>))}
          {(movies.length > 0) ? (<Button className='Button-MoviesCardList'
            type='button' title='Ещё' onChange={countVisibleMovies}>
            Ещё
          </Button>) : <p>Выберите фильм</p>}
      </MoviesCardList>
    </React.Fragment>
  );
}

Movies.propTypes = {
  movies: PropTypes.array.isRequired,
  toggleMovies: PropTypes.func.isRequired,
  onHeader: PropTypes.func.isRequired,
  onSearch: PropTypes.func,
  filterTimes: PropTypes.func.isRequired,
  filterMovies: PropTypes.func.isRequired,
  isCheckFilter: PropTypes.func.isRequired,
  isOpenCheck: PropTypes.bool.isRequired,
};

export default Movies;
