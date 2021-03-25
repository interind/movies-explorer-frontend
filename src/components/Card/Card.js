import React from 'react';
import PropTypes from 'prop-types';
import CurrentUserContext from '../../context/CurrentUserContext';
import notFound from '../../images/moviesCard/errorPic.jpg';
import './Card.css';

function Card({
  card,
  onCardClick,
  onCardDelete,
  onCardLike,
}) {
  const { _id } = React.useContext(CurrentUserContext);
  const [visible, setVisible] = React.useState(card.link);

  return (
    <React.Fragment>
        <div className='Card'>
          <img
            src={visible}
            alt={card.name}
            className='Card__pic'
            onError={() => {
              setVisible(notFound);
            }}
            onClick={() => onCardClick(card)}
          />
          <button
            className={`Card__button-trash ${
              card.owner === _id
                ? 'Card__button-trash_visible'
                : ''
            }`}
            type='button'
            title='кнопка удаления карточки'
            onClick={() => onCardDelete(card)}
          ></button>
          <div className='Card__info'>
            <h2 className='Card__title' title={card.name}>
              {card.name}
            </h2>
            {card.likes && (
              <div className='Card__like'>
                <button
                  className={`Card__button-like Card__button-like_color_white ${
                    card.likes.find((id) => id === _id)
                      ? 'Card__button-like_color_black'
                      : ''
                  }`}
                  type='button'
                  title='кнопка для лайков'
                  onClick={() => onCardLike(card)}
                ></button>
                <span
                  className='Card__counter-like'
                  title={card.likes.map(() => '🖤')}
                >
                  {card.likes.length}
                </span>
              </div>
            )}
          </div>
        </div>
    </React.Fragment>
  );
}

Card.propTypes = {
  card: PropTypes.object,
  onCardLike: PropTypes.func.isRequired,
  onCardClick: PropTypes.func.isRequired,
  onCardDelete: PropTypes.func.isRequired,
};

export default Card;
