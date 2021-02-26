import React from 'react';
import PropTypes from 'prop-types';
import classes from 'classnames';
import CurrentUserContext from '../../context/CurrentUserContext';
import './MoviesCard.css';

function MoviesCard({
  card,
  movies,
  onCardClick,
  toggleMovies,
}) {
  const userMovies = React.useContext(CurrentUserContext);
  const [visible, setVisible] = React.useState(`https://api.nomoreparties.co${card.image.url}`);
  const classLike = classes('MoviesCard__button-like',
    { 'MoviesCard__button-like_color_red': userMovies.find((car) => car.id === card.id) },
    { 'MoviesCard__button-like_theme_delete': movies === userMovies });

  return (
    <React.Fragment>
        <div className='MoviesCard'>
          <a className='MovieCard__link' title='трейлер к фильму' href={card.trailerLink} target='_blank' rel='noopener noreferrer' />
          <img
            src={visible}
            alt={card.nameRU}
            className='MoviesCard__pic'
            onError={() => {
              setVisible('/static/media/errorPic.b39bbd5d.jpg');
            }}
            onClick={(evt) => {
              if (evt.target === evt.currentTarget) {
                onCardClick({ src: visible, name: card.nameRU, description: card.description });
              }
            }}
          />
            <h2 className='MoviesCard__title' title={card.nameRU}>
              {card.nameRU}
            </h2>
            <button
              className={classLike}
              type='button'
              title={'🖤'}
              onClick={() => {
                toggleMovies(card);
              }}
            ></button>
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
  onCardClick: PropTypes.func,
  toggleMovies: PropTypes.func,
};

export default MoviesCard;
