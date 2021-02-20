import React from 'react';
import NavTab from '../NavTab/NavTab';
import './Techs.css';

function Techs() {
  const headerTitle = 'Технологии';
  const title = '7 технологий';
  const subtitle = 'На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.';
  const links = [
    {
      path: 'https://html5book.ru/',
      text: 'HTML',
      active: 'Navigation-item_active',
      title: 'Перейти на страницу html5book.ru',
    },
    {
      path: 'https://developer.mozilla.org/ru/docs/Web/CSS',
      text: 'CSS',
      active: 'Navigation-item_active',
      title: 'Перейти на страницу developer.mozilla.org',
    },
    {
      path: 'https://learn.javascript.ru/',
      text: 'JS',
      active: 'Navigation-item_active',
      title: 'Перейти на страницу learn.javascript.ru',
    },
    {
      path: 'https://ru.reactjs.org/',
      text: 'React',
      active: 'Navigation-item_active',
      title: 'Перейти на страницу reactjs.org',
    },
    {
      path: 'https://git-scm.com/',
      text: 'Git',
      active: 'Navigation-item_active',
      title: 'Перейти на страницу git-scm.com',
    },
    {
      path: 'https://expressjs.com/ru/',
      text: 'Express.js',
      active: 'Navigation-item_active',
      title: 'Перейти на страницу expressjs.com',
    },
    {
      path: 'https://www.mongodb.com/',
      text: 'mongoDB',
      active: 'Navigation-item_active',
      title: 'Перейти на страницу mongodb.com',
    },
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
