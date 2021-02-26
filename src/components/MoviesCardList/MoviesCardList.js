import React from 'react';
import PropTypes from 'prop-types';
import './MoviesCardList.css';

function MoviesCardList({ children }) {
  return (
    <React.Fragment>
        <div className='MoviesCardList'>
         {children}
        </div>
    </React.Fragment>
  );
}

MoviesCardList.propTypes = {
  children: PropTypes.any,
};

export default MoviesCardList;
