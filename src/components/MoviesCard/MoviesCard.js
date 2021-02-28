import React from 'react';
import PropTypes from 'prop-types';
import classes from 'classnames';
import Button from '../Button/Button';
import CurrentUserContext from '../../context/CurrentUserContext';
import './MoviesCard.css';
import '../Button/Button.css';

function MoviesCard({
  card,
  movies,
  toggleMovies,
}) {
  const userMovies = React.useContext(CurrentUserContext);
  const visible = `https://api.nomoreparties.co${card.image.url}`;
  const classLike = classes('Button-like',
    { 'Button-like_color_red': userMovies.find((car) => car.id === card.id) },
    { 'Button-like_theme_delete': movies === userMovies });

  return (
    <React.Fragment>
        <div className='MoviesCard'>
          <a className='MoviesCard__pic' style={{ backgroundImage: `url(${visible})` }} title={card.description} href={card.trailerLink} target='_blank' rel='noopener noreferrer'/>
            <h2 className='MoviesCard__title' title={card.nameRU}>
              {card.nameRU}
            </h2>
            <Button
              className={classLike}
              type='button'
              title={'🖤'}
              onChange={() => {
                toggleMovies(card);
              }}
           />
            <span
              className='MoviesCard__duration'
              title='время фильма'
            >
              {`${Math.floor(card.duration / 60)}ч ${card.duration % 60}м`}
            </span>
        </div>
    </React.Fragment>
  );
}

MoviesCard.propTypes = {
  card: PropTypes.object,
  movie: PropTypes.object,
  movies: PropTypes.array,
  toggleMovies: PropTypes.func,
};

export default MoviesCard;
