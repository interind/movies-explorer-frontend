import React from 'react';
import './Footer.css';
import NavTab from '../NavTab/NavTab';

function Footer() {
  const title = 'Учебный проект Яндекс.Практикум х BeatFilm.';
  const links = [
    {
      path: 'https://praktikum.yandex.ru/',
      text: 'Яндекс.Практикум',
      title: 'ссылка на сайт Яндекс.Практикум',
      active: '',
    },
    {
      path: 'https://github.com/',
      text: 'Github',
      title: 'ссылка на сайт Github',
      active: '',
    },
    {
      path: 'https://ru-ru.facebook.com/',
      text: 'Facebook',
      title: 'ссылка на сайт Facebook',
      active: '',
    },
  ];
  const mod = {
    item: 'Footer-item',
    items: 'Footer-items',
  };
  return (
    <footer className='Footer'>
      <div className='Footer__header'>
        <h2 className='Footer__title'>{title}</h2>
      </div>
      <div className='Footer__footer'>
        <p className='Footer-item'>
          &copy;{new Date().getFullYear()}
        </p>
        <NavTab links={links} mod={mod}/>
      </div>
    </footer>
  );
}

export default Footer;
