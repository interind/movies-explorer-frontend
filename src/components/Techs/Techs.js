import React from 'react';
import NavTab from '../NavTab/NavTab';
import './Techs.css';

function Techs() {
  const headerTitle = 'Технологии';
  const title = '7 технологий';
  const subtitle = 'На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.';
  const links = [
    { path: 'https://html5book.ru/', text: 'HTML' },
    { path: 'https://developer.mozilla.org/ru/docs/Web/CSS', text: 'CSS' },
    { path: 'https://learn.javascript.ru/', text: 'JS' },
    { path: 'https://ru.reactjs.org/', text: 'React' },
    { path: 'https://git-scm.com/', text: 'Git' },
    { path: 'https://expressjs.com/ru/', text: 'Express.js' },
    { path: 'https://www.mongodb.com/', text: 'mongoDB' },
  ];
  return (
    <section className='Techs' id={'techs'}>
      <div className='Techs__header'>
        <h2 className='Techs__title'>
          {headerTitle}
        </h2>
      </div>
      <h3 className='Techs__title Techs__title_place_blank'>{title}</h3>
      <p className='Techs__subtitle'>{subtitle}</p>
    <NavTab mod={'Techs-item'} links={links}/>
    </section>
  );
}

export default Techs;
