import React from 'react';
import NavTab from '../NavTab/NavTab';
import HeaderBar from '../HeaderBar/HeaderBar';
import './Techs.css';

function Techs() {
  const pageInfo = {
    title: '7 технологий',
    subtitle: 'На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.',
  };
  const techs = {
    place: 'techs',
  };
  const dataLinks = [
    {
      path: 'https://html5book.ru/',
      text: 'HTML',
      active: '',
      title: 'Перейти на страницу html5book.ru',
      type: 'url',
    },
    {
      path: 'https://developer.mozilla.org/ru/docs/Web/CSS',
      text: 'CSS',
      active: '',
      title: 'Перейти на страницу developer.mozilla.org',
      type: 'url',
    },
    {
      path: 'https://learn.javascript.ru/',
      text: 'JS',
      active: '',
      title: 'Перейти на страницу learn.javascript.ru',
      type: 'url',
    },
    {
      path: 'https://ru.reactjs.org/',
      text: 'React',
      active: '',
      title: 'Перейти на страницу reactjs.org',
      type: 'url',
    },
    {
      path: 'https://git-scm.com/',
      text: 'Git',
      active: '',
      title: 'Перейти на страницу git-scm.com',
      type: 'url',
    },
    {
      path: 'https://expressjs.com/ru/',
      text: 'Express.js',
      active: '',
      title: 'Перейти на страницу expressjs.com',
      type: 'url',
    },
    {
      path: 'https://www.mongodb.com/',
      text: 'mongoDB',
      active: '',
      title: 'Перейти на страницу mongodb.com',
      type: 'url',
    },
  ];
  return (
    <section className='Techs' id={'techs'}>
      <HeaderBar modifier={techs}>
        Технологии
      </HeaderBar>
      <h3 className='Techs__title'>{pageInfo.title}</h3>
      <p className='Techs__subtitle'>{pageInfo.subtitle}</p>
    <NavTab place={techs.place} links={dataLinks}/>
    </section>
  );
}

export default Techs;
