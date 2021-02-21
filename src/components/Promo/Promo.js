import React from 'react';
import NavTab from '../NavTab/NavTab';
import './Promo.css';

function Promo() {
  const title = 'Учебный проект студента факультета Веб-разработки.';
  const links = [
    { path: '#about-project', text: 'О проекте' },
    { path: '#techs', text: 'Технологии' },
    { path: '#about-me', text: 'Студент' },
  ];
  const mod = {
    item: 'Promo-item',
    items: 'Promo-items',
  };
  const handleLinkClick = (evt) => {
    evt.preventDefault();
    document.querySelector(evt.target.hash).scrollIntoView();
  };
  return (
    <section className="Promo">
      <h1 className='Promo__title'>{title}</h1>
      <div className='Promo__nav-tab'>
        <NavTab mod={mod} links={links} handleLinkClick={handleLinkClick}/>
      </div>
    </section>
  );
}

export default Promo;
