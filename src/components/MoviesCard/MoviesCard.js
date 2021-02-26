import React from 'react';
import PropTypes from 'prop-types';
import classes from 'classnames';
import './MoviesCard.css';

function MoviesCard({
  card,
  onCardClick,
}) {
  const [visible, setVisible] = React.useState(`http:/${card.image.url}`);
  const [like, setLike] = React.useState(false);
  const classLike = classes('MoviesCard__button-like', { 'MoviesCard__button-like_color_black': like });

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
                onCardClick({ src: card.image.url, name: card.nameRU });
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
              onClick={() => setLike(!like)}
            ></button>
            <span
              className='MoviesCard__duration'
              title='время фильма'
            >
              {card.duration}
            </span>
        </div>
    </React.Fragment>
  );
}

MoviesCard.propTypes = {
  card: PropTypes.object,
  movie: PropTypes.object,
  onCardClick: PropTypes.func,
  onCardDelete: PropTypes.func,
};

export default MoviesCard;
