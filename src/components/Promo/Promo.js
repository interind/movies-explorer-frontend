import React from 'react';
import NavTab from '../NavTab/NavTab';
import './Promo.css';

function Promo() {
  const title = 'Учебный проект студента факультета Веб-разработки.';
  const links = [
    { path: '#about-project', text: 'О проекте' },
    { path: '#techs', text: 'Технологии' },
    { path: '#student', text: 'Студент' },
  ];
  const handleLinkClick = (evt) => {
    evt.preventDefault();
    document.querySelector(evt.target.hash).scrollIntoView();
  };
  return (
    <section className="Promo">
      <h1 className='Promo__title'>{title}</h1>
      <div className='Promo__nav-tab'>
        <NavTab mod={'Promo-item'} links={links} handleLinkClick={handleLinkClick}/>
      </div>
    </section>
  );
}

export default Promo;
