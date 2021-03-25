import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import './CardList.css';
import AddPlaceForm from '../AddPlaceForm/AddPlaceForm';

function CardList({
  component: Component,
  cards,
  onAddPlace,
  buttonLoading,
  handleCardLike,
  handleCardClick,
  handleCardDelete,
}) {
  const notFound = <p className='CardList__not-found'>Картинок еще нет</p>;
  const [count, setCount] = useState(4);
  return (
    <React.Fragment>
        <AddPlaceForm
          onAddPlace={onAddPlace}
          buttonLoading={buttonLoading}
        />
        <section className='CardList'>
          {cards.length > 0 && cards.slice(0, count).map((card) => <Component
            key={card.createdAt + card._id}
            card={card}
            onCardLike={handleCardLike}
            onCardClick={handleCardClick}
            onCardDelete={handleCardDelete}
          />)}
          {cards.length <= 0 && notFound}
         {(cards.length > 0) && (cards.length > count) && (<Button className='Button-CardList'
            type='button' title='Ещё' onChange={() => setCount(count + 4)}>
            ещё --&gt;
          </Button>)}
        </section>
    </React.Fragment>
  );
}

CardList.propTypes = {
  component: PropTypes.func.isRequired,
  cards: PropTypes.array.isRequired,
  buttonLoading: PropTypes.bool.isRequired,
  onAddPlace: PropTypes.func.isRequired,
  handleCardLike: PropTypes.func.isRequired,
  handleCardClick: PropTypes.func.isRequired,
  handleCardDelete: PropTypes.func.isRequired,
};

export default CardList;
