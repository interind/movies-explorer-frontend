import React from 'react';
import NavTab from '../NavTab/NavTab';
import './Techs.css';
import HeaderBar from '../HeaderBar/HeaderBar';

function Techs() {
  const headerTitle = 'Технологии';
  const title = '7 технологий';
  const subtitle = 'На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.';
  const mod = {
    item: 'Techs-item',
    items: 'Techs-items',
  };
  const links = [
    {
      path: 'https://html5book.ru/',
      text: 'HTML',
      active: '',
      title: 'Перейти на страницу html5book.ru',
    },
    {
      path: 'https://developer.mozilla.org/ru/docs/Web/CSS',
      text: 'CSS',
      active: '',
      title: 'Перейти на страницу developer.mozilla.org',
    },
    {
      path: 'https://learn.javascript.ru/',
      text: 'JS',
      active: '',
      title: 'Перейти на страницу learn.javascript.ru',
    },
    {
      path: 'https://ru.reactjs.org/',
      text: 'React',
      active: '',
      title: 'Перейти на страницу reactjs.org',
    },
    {
      path: 'https://git-scm.com/',
      text: 'Git',
      active: '',
      title: 'Перейти на страницу git-scm.com',
    },
    {
      path: 'https://expressjs.com/ru/',
      text: 'Express.js',
      active: '',
      title: 'Перейти на страницу expressjs.com',
    },
    {
      path: 'https://www.mongodb.com/',
      text: 'mongoDB',
      active: '',
      title: 'Перейти на страницу mongodb.com',
    },
  ];
  return (
    <section className='Techs' id={'techs'}>
      <HeaderBar title={headerTitle} modifier={'Techs__header'} />
      <h3 className='Techs__title Techs__title_place_blank'>{title}</h3>
      <p className='Techs__subtitle'>{subtitle}</p>
    <NavTab mod={mod} links={links}/>
    </section>
  );
}

export default Techs;
