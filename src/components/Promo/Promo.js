import React from 'react';
import NavTab from '../NavTab/NavTab';
import './Promo.css';

function Promo() {
  const promo = {
    title: 'Учебный проект студента факультета Веб-разработки.',
    place: 'promo',
  };
  const dataLinks = [
    { path: '#about-project', text: 'О проекте', type: 'local' },
    { path: '#techs', text: 'Технологии', type: 'local' },
    { path: '#about-me', text: 'Студент', type: 'local' },
  ];
  const handleLinkClick = (evt) => {
    evt.preventDefault();
    document.querySelector(evt.target.hash).scrollIntoView();
  };
  return (
    <section className="Promo">
      <h1 className='Promo__title'>{promo.title}</h1>
      <div className='Promo__nav-tab'>
        <NavTab links={dataLinks} place={promo.place} handleLinkClick={handleLinkClick}/>
      </div>
    </section>
  );
}

export default Promo;
