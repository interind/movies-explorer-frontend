import React from 'react';
import HeaderBar from '../HeaderBar/HeaderBar';
import NavTab from '../NavTab/NavTab';
import './Portfolio.css';

function Portfolio() {
  const portfolio = { place: 'portfolio' };
  const dataLinks = [
    {
      path: 'https://interind.github.io/russian-travel/index.html',
      text: 'Статичный сайт',
      title: 'ссылка на сайт russian-travel',
      active: '',
      type: 'url',
    },
    {
      path: 'https://interind.github.io/mesto/index.html',
      text: 'Адаптивный сайт',
      title: 'ссылка на сайт mesto',
      active: '',
      type: 'url',
    },
    {
      path: '/movies',
      text: 'Одностраничное приложение',
      title: 'ссылка на сайт mesto-react',
      active: '',
      type: 'local',
    },
  ];
  return (
    <section className="Portfolio">
      <HeaderBar place={portfolio.place}>
        Портфолио
      </HeaderBar>
      <NavTab links={dataLinks} place={portfolio.place} >
        <span className='Portfolio-arrow'/>
      </NavTab>
    </section>
  );
}

export default Portfolio;
