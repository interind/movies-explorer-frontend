import React from 'react';
import PropTypes from 'prop-types';
import classes from 'classnames';
import Button from '../Button/Button';
import './MoviesCard.css';
import '../Button/Button.css';

function MoviesCard({
  card,
  movies,
  userMovies,
  toggleMovies,
}) {
  const { image } = card;
  const link = image || './static/media/errorPic.b39bbd5d.jpg';
  const [visible, setVisible] = React.useState(link);
  const classLike = classes('Button-like',
    { 'Button-like_color_red': userMovies.find((car) => car.id === card.id) },
    { 'Button-like_theme_delete': movies === userMovies });

  return (
    <React.Fragment>
        <div className='MoviesCard'>
          <a className='MoviesCard__link' title={card.description} href={card.trailerLink} target='_blank' rel='noopener noreferrer'>
            <img
              className='MoviesCard__pic'
              src={visible}
              alt={card.nameRU}
              onError={() => {
                setVisible('/static/media/errorPic.b39bbd5d.jpg');
              }}
            />
          </a>
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
  card: PropTypes.object.isRequired,
  userMovies: PropTypes.array.isRequired,
  movies: PropTypes.array.isRequired,
  toggleMovies: PropTypes.func.isRequired,
};

export default MoviesCard;
